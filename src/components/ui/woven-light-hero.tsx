"use client";

import React, { useRef, useEffect } from "react";
import * as THREE from "three";

// --- Woven Canvas Component (Three.js Particle Torus Mesh) ---
export const WovenCanvas = ({ className = "" }: { className?: string }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const currentMount = mountRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      currentMount.clientWidth / currentMount.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 4.5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    currentMount.appendChild(renderer.domElement);

    const mouse = new THREE.Vector2(0, 0);
    const startTime = performance.now();

    // --- Woven Silk Geometry with 45,000 Particles ---
    const particleCount = 45000;
    const positions = new Float32Array(particleCount * 3);
    const originalPositions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);

    const geometry = new THREE.BufferGeometry();
    const torusKnot = new THREE.TorusKnotGeometry(1.6, 0.45, 180, 28);

    for (let i = 0; i < particleCount; i++) {
      const vertexIndex = i % torusKnot.attributes.position.count;
      const x = torusKnot.attributes.position.getX(vertexIndex) + (Math.random() - 0.5) * 0.12;
      const y = torusKnot.attributes.position.getY(vertexIndex) + (Math.random() - 0.5) * 0.12;
      const z = torusKnot.attributes.position.getZ(vertexIndex) + (Math.random() - 0.5) * 0.12;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
      originalPositions[i * 3] = x;
      originalPositions[i * 3 + 1] = y;
      originalPositions[i * 3 + 2] = z;

      // Strict Carbon & Porcelain Monochromatic Palette: Shimmering Porcelain Silver
      const lightness = 0.55 + Math.random() * 0.45;
      const color = new THREE.Color().setHSL(0, 0, lightness);
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;

      velocities[i * 3] = 0;
      velocities[i * 3 + 1] = 0;
      velocities[i * 3 + 2] = 0;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.018,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      transparent: true,
      opacity: 0.75,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    const handleMouseMove = (event: MouseEvent) => {
      const rect = currentMount.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = (performance.now() - startTime) * 0.001;

      const mouseWorld = new THREE.Vector3(mouse.x * 2.8, mouse.y * 2.8, 0);

      const posAttr = geometry.attributes.position;
      const currentPosArray = posAttr.array as Float32Array;

      // Calculate interactive perturbation
      for (let i = 0; i < particleCount; i += 2) {
        const ix = i * 3;
        const iy = i * 3 + 1;
        const iz = i * 3 + 2;

        const px = currentPosArray[ix];
        const py = currentPosArray[iy];
        const pz = currentPosArray[iz];

        const dx = px - mouseWorld.x;
        const dy = py - mouseWorld.y;
        const dz = pz - mouseWorld.z;
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (dist < 1.4 && dist > 0.001) {
          const force = (1.4 - dist) * 0.015;
          velocities[ix] += (dx / dist) * force;
          velocities[iy] += (dy / dist) * force;
          velocities[iz] += (dz / dist) * force;
        }

        // Return to original anchor
        const ox = originalPositions[ix];
        const oy = originalPositions[iy];
        const oz = originalPositions[iz];

        velocities[ix] += (ox - px) * 0.002;
        velocities[iy] += (oy - py) * 0.002;
        velocities[iz] += (oz - pz) * 0.002;

        // Damping
        velocities[ix] *= 0.94;
        velocities[iy] *= 0.94;
        velocities[iz] *= 0.94;

        currentPosArray[ix] += velocities[ix];
        currentPosArray[iy] += velocities[iy];
        currentPosArray[iz] += velocities[iz];
      }

      posAttr.needsUpdate = true;

      points.rotation.y = elapsedTime * 0.06;
      points.rotation.x = Math.sin(elapsedTime * 0.03) * 0.15;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!currentMount) return;
      const width = currentMount.clientWidth;
      const height = currentMount.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      if (currentMount.contains(renderer.domElement)) {
        currentMount.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 z-0 overflow-hidden ${className}`}
    />
  );
};

// Default export wrapper matching 21st dev prompt
export const WovenLightHero = () => {
  return (
    <div className="relative w-full h-full min-h-[600px] overflow-hidden">
      <WovenCanvas />
    </div>
  );
};

export default WovenLightHero;
