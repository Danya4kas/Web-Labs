const jobCards = document.querySelectorAll('.job_card');
const activeFiltersContainer = document.querySelector('.active-filters');
let activeFilters = [];


function filterJobsByTags() {
    const filteredJobs = Array.from(jobCards).filter(jobCard => {
        const tags = Array.from(jobCard.querySelectorAll('.tag_btn')).map(tag => tag.textContent.toLowerCase());
        return activeFilters.every(filter => tags.includes(filter.toLowerCase()));
    });

    const container = document.querySelector('.job_cards_container');
    container.innerHTML = ''; 

    filteredJobs.forEach(job => {
        container.appendChild(job);
    });
}


function sortJobsByTag(tag) {
    if (!activeFilters.includes(tag)) {
        activeFilters.push(tag);
        updateActiveFilters();
        filterJobsByTags();
    }
}


function updateActiveFilters() {
    activeFiltersContainer.innerHTML = ''; 
    activeFilters.forEach(tag => {
        const filterElement = document.createElement('span');
        filterElement.classList.add('active-filter');
        filterElement.innerHTML = `${tag} <button onclick="removeFilter('${tag}')">x</button>`;
        activeFiltersContainer.appendChild(filterElement);
    });
}


function removeFilter(tag) {
    activeFilters = activeFilters.filter(filter => filter !== tag);
    updateActiveFilters();
    filterJobsByTags();
}


document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
        const tag = button.getAttribute('data-tag'); 
        sortJobsByTag(tag);
    });
});
