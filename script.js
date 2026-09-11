const header = document.querySelector('.site-header');
const projectList = document.querySelector('.project-list');

const projectYears = {
  'Cold Case VR: Fatal Follower': 2024,
  'Odyssey XR': 2024,
  'Backdrop Alive': 2024,
  'Adventure Forge': 2023,
  'Sea of Legends': 2020,
  'Agua, Viento y Verdor': 2019,
  'Virtual Education': 2018,
  'Bridal Lab': 2018,
  'Morgan Technica Simulator': 2018,
  'Mobile Race': 2017,
  'VR Maze': 2017,
  'El Edificio': 2015
};

if (projectList) {
  [...projectList.querySelectorAll('.project-row')]
    .sort((first, second) => {
      const firstTitle = first.querySelector('h3')?.textContent.trim();
      const secondTitle = second.querySelector('h3')?.textContent.trim();
      return (projectYears[secondTitle] || 0) - (projectYears[firstTitle] || 0);
    })
    .forEach((project, index) => {
      project.querySelector('.project-index').textContent = String(index + 1).padStart(2, '0');
      projectList.appendChild(project);
    });
}

const updateHeader = () => {
  header.classList.toggle('is-scrolled', window.scrollY > 30);
};

window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();
