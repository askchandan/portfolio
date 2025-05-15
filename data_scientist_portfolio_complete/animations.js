// animations.js
// Central place for GSAP-based animations

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export function runPageAnimations() {
  gsap.from('.project-card', {
    opacity: 0,
    y: 50,
    duration: 0.8,
    ease: 'power2.out',
    stagger: 0.2,
    scrollTrigger: {
      trigger: '.projects-section',
      start: 'top 80%'
    }
  });

  gsap.from('.timeline-item', {
    opacity: 0,
    x: -100,
    duration: 1,
    ease: 'power2.out',
    stagger: 0.3,
    scrollTrigger: {
      trigger: '.experience-section',
      start: 'top 80%'
    }
  });

  gsap.from('.skill-icon', {
    opacity: 0,
    scale: 0.5,
    duration: 0.6,
    ease: 'back.out(1.7)',
    stagger: 0.1,
    scrollTrigger: {
      trigger: '.skills-section',
      start: 'top 80%'
    }
  });
}