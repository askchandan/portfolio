# Modern 3D Animated Data Scientist Portfolio

A visually stunning, highly interactive, and fully responsive data scientist portfolio website that leverages WebGL and Three.js to create immersive 3D animations and effects. The portfolio presents a professional, futuristic design that stands out in 2025, showcasing projects, experience, skills/tools, and contact information.

## Features

### 1. Interactive 3D Hero Section
- Dynamic particle system with WebGL
- Interactive mouse-based parallax effects
- Smooth entrance animations
- Water wave effect on cursor movement

### 2. Project Showcase
- 3D animated project cards with hover effects
- Category-based filtering system
- Interactive project modals with detailed information
- Smooth transitions and animations

### 3. Experience Timeline
- Animated 3D timeline
- Interactive milestone cards
- Smooth scroll animations
- Company and technology icons

### 4. Skills Visualization
- Interactive 3D skills sphere
- Animated skill bars
- Category-based organization
- Progress indicators

### 5. Contact Section
- Modern contact form with validation
- Social media integration
- Copy-to-clipboard functionality
- Animated feedback on form submission

## Technologies Used

- HTML5
- CSS3 (with modern features like CSS Grid and Flexbox)
- JavaScript (ES6+)
- Three.js for 3D graphics
- GSAP for animations
- WebGL for advanced graphics
- Font Awesome for icons

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/data-scientist-portfolio.git
```

2. Navigate to the project directory:
```bash
cd data-scientist-portfolio
```

3. Open `index.html` in your browser or use a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve
```

## Project Structure

```
data-scientist-portfolio/
├── index.html
├── css/
│   ├── style.css
│   └── animations.css
├── js/
│   ├── main.js
│   ├── three-scene.js
│   ├── cursor.js
│   ├── projects.js
│   ├── skills.js
│   └── contact.js
├── assets/
│   ├── images/
│   │   └── projects/
│   └── resume.pdf
└── README.md
```

## Customization

### Changing Colors
The color scheme can be modified in `css/style.css` by updating the CSS variables in the `:root` selector:

```css
:root {
    --primary-color: #6C63FF;
    --secondary-color: #2A2D3E;
    --accent-color: #00F5FF;
    --text-color: #FFFFFF;
    --background-color: #1A1B26;
}
```

### Adding Projects
Add new projects in `js/projects.js` by extending the `projects` array:

```javascript
const projects = [
    {
        id: 5,
        title: 'New Project',
        description: 'Project description',
        category: 'category',
        technologies: ['Tech1', 'Tech2'],
        image: 'assets/images/projects/project.jpg',
        github: 'https://github.com/username/project',
        demo: 'https://project-demo.com'
    }
];
```

### Modifying Skills
Update skills in `js/skills.js` by modifying the `skills` array:

```javascript
const skills = [
    {
        name: 'Skill Name',
        level: 90,
        category: 'Category',
        icon: 'icon-class'
    }
];
```

## Performance Optimization

- Lazy loading of images and 3D models
- Optimized WebGL rendering
- Efficient animation handling
- Responsive design for all devices

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Three.js for 3D graphics capabilities
- GSAP for smooth animations
- Font Awesome for icons
- Inspiration from various modern portfolio designs

## Contact

Your Name - [@yourtwitter](https://twitter.com/yourtwitter)
Project Link: [https://github.com/yourusername/data-scientist-portfolio](https://github.com/yourusername/data-scientist-portfolio) 