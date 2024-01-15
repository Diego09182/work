
const app = Vue.createApp({})

app.component('headers', {
    data() {
        return {
            aboutMeTitle: '關於我',
            aboutMeContent: '我是一個Laravel開發者',
            contactTitle: 'Contact',
            email: 'ssss.gladmasy@gmail.com'
        };
    },
    template: 
        `<div>
            <header>
                <div class="collapse bg-dark" id="navbarHeader">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-8 col-md-7 py-4">
                                <h4 class="text-white">{{ aboutMeTitle }}</h4>
                                <h4 class="text-white">{{ aboutMeContent }}</h4>
                            </div>
                            <div class="col-sm-4 offset-md-1 py-4">
                                <h4 class="text-white">{{ contactTitle }}</h4>
                                <ul class="list-unstyled">
                                    <li><h4 class="text-white">Email: {{ email }}</h4></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="navbar navbar-dark bg-dark shadow-sm">
                    <div class="container">
                        <a href="#" class="navbar-brand d-flex align-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true" class="me-2" viewBox="0 0 24 24"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
                            <strong>Work</strong>
                        </a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </div>
            </header>
        </div>`
});

app.component('banner', {
    data() {
        return {
            name: '張皓明',
            role: '一個Laravel開發者'
        };
    },
    template: 
        `<div>
            <section class="py-2 text-center container">
                <div class="row py-lg-5">
                    <div class="col-lg-6 col-md-8 mx-auto">
                        <h1><b>{{ name }}</b></h1>
                        <h1><b>{{ role }}</b></h1>
                    </div>
                </div>
            </section>
        </div>`
});

app.component('project-card', {
    data() {
        return {
            tag: 'Laravel'
        };
    },
    props: ['title', 'description', 'image', 'githubLink'],
    template: 
        `<div class="col">
            <div class="card shadow-sm" class="border border-5 rounded-3">
                <img :src="image" class="img-fluid" alt="...">
                <div class="card-body">
                    <span class="badge rounded-pill bg-info">{{ tag }}</span>
                    <p class="card-text">{{ description }}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <a :href="githubLink" type="button" class="btn btn-sm btn-outline-secondary">View</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
})

app.component('feature-card', {
    props: ['title', 'image', 'technology', 'days'],
    template: 
        `<div>
            <div class="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" :style="{ backgroundImage: 'url(' + image + ')' }">
                <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                    <h2 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">{{ title }}</h2>
                    <ul class="d-flex list-unstyled mt-auto">
                        <li class="me-auto">
                            <img :src="image" alt="Logo" width="32" height="32" class="rounded-circle border border-white">
                        </li>
                        <li class="d-flex align-items-center me-3">
                            <svg class="bi me-2" width="1em" height="1em"><use xlink:href="#geo-fill"/></svg>
                            <small>{{ technology }}</small>
                        </li>
                        <li class="d-flex align-items-center">
                            <svg class="bi me-2" width="1em" height="1em"><use xlink:href="#calendar3"/></svg>
                        </li>
                    </ul>
                </div>
            </div>
        </div>`
});

  app.component('footers', {
    data() {
        return {
            copyright: '作品集內容版權所有，但是專案都在 MIT 條款下公開',
            author: '張皓明',
            developerDescription: '一個 Laravel 開發者',
            skills: [
                { name: 'Bootstrap', link: 'https://getbootstrap.com/' },
                { name: 'MySQL', link: 'https://www.mysql.com/' },
                { name: 'Vue', link: 'https://vuejs.org/' },
                { name: 'Laravel', link: 'https://laravel.com/' },
            ],
            projects: [
                { name: 'SwiftFox', link: 'https://github.com/Diego09182/SwiftFox' },
                { name: 'Chronus', link: 'https://github.com/Diego09182/Chronus' },
                { name: 'TNS', link: 'https://github.com/Diego09182/TNS' },
            ],
            contact: {
                email: 'ssss.gladmsasy@gmail.com',
                github: 'https://github.com/Diego09182',
            },
        };
    },
    template:
        `<footer class="text-center text-lg-start bg-body-tertiary text-muted">
            <div class="container text-center text-md-start mt-5">
                <div class="row mt-3">
                    <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                        <h6 class="text-uppercase fw-bold mb-4">{{ author }}</h6>
                        <p>{{ developerDescription }}</p>
                    </div>
                    <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 class="text-uppercase fw-bold mb-4">Skill</h6>
                        <p v-for="skill in skills">
                            <a :href="skill.link" class="text-reset">{{ skill.name }}</a>
                        </p>
                    </div>
                    <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 class="text-uppercase fw-bold mb-4">Project</h6>
                        <p v-for="project in projects">
                            <a :href="project.link" class="text-reset">{{ project.name }}</a>
                        </p>
                    </div>
                    <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                        <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                            </svg>
                            {{ contact.email }}
                        </p>
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                            </svg>
                            <a :href="contact.github" class="text-reset">GitHub</a>
                        </p>
                    </div>
                </div>
            </div>
            <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05);">
                <p class="text-reset fw-bold">{{ copyright }}</p>
            </div>
        </footer>`
});

app.mount('#app')
