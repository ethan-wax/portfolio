# Professional Resume Website

A clean, modern, single-page resume website built with Next.js and Tailwind CSS. This website showcases your professional experience, skills, projects, and contact information in an elegant, mobile-friendly design.

## Features

- **Single-page design** with smooth scrolling navigation
- **Responsive layout** that works on all devices
- **Professional sections**: Header, Skills, Experience, Projects, Education & Certifications, Contact
- **Downloadable resume** (PDF format)
- **Social media links** (LinkedIn, GitHub)
- **Accessible design** with proper ARIA labels and keyboard navigation
- **Modern UI** with clean typography and subtle animations

## Sections

1. **Header**: Name, title, brief summary, and resume download button
2. **Skills**: Organized by category (Frontend, Backend, Tools & Others)
3. **Experience**: Job history with impact-focused bullet points
4. **Projects**: Portfolio highlights with technology tags
5. **Education & Certifications**: Academic background and professional certifications
6. **Contact**: Email and social media links

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Personal Information

Update the following in `src/app/page.tsx`:

1. **Name and Title**: Replace "Your Name" and "Full Stack Developer"
2. **Summary**: Update the professional summary in the header section
3. **Contact Information**: 
   - Email: Replace `your.email@example.com`
   - LinkedIn: Replace `yourusername` in the LinkedIn URL
   - GitHub: Replace `yourusername` in the GitHub URL

### Skills

Update the skills in the Skills section. The current structure includes:
- Frontend technologies
- Backend technologies  
- Tools and other skills

### Experience

Replace the sample experience entries with your actual work history:
- Job titles
- Company names
- Dates
- Impact-focused bullet points (1-2 per role)

### Projects

Update the projects section with your actual portfolio:
- Project names and descriptions
- Technology tags
- Links to live demos or case studies

### Education & Certifications

Replace with your actual:
- Degree and institution
- Graduation year
- Professional certifications

### Resume PDF

1. Replace `public/resume.pdf` with your actual resume file
2. Ensure the file is named `resume.pdf` for the download link to work

### Styling

The website uses Tailwind CSS for styling. You can customize:
- Colors: Update the blue color scheme in the CSS classes
- Typography: Modify font sizes and weights
- Layout: Adjust spacing and grid layouts
- Backgrounds: Change section background colors

### Metadata

Update the metadata in `src/app/layout.tsx`:
- Page title
- Description
- Keywords
- Author name

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The website can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Railway

## Custom Domain

After deployment, you can add a custom domain:
1. Purchase a domain (e.g., yourname.com)
2. Configure DNS settings to point to your hosting platform
3. Update the domain in your hosting platform settings

## Accessibility

The website includes:
- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Proper color contrast
- Focus indicators

## Performance

- Optimized images and assets
- Minimal external dependencies
- Fast loading times
- Mobile-optimized

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

Feel free to submit issues and enhancement requests!

---

**Note**: Remember to replace all placeholder content with your actual information before deploying your website.
