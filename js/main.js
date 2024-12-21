const Home = {
    template: 
        `<div>
            <headers></headers>
            <banner></banner>
            <h1 class="text-center"><b>專案</b></h1>
            <div class="album py-5 bg-light">
                <div class="container">
                    <div class="row">
                        <div class="col-4">
                            <project-card
                                title="Chronus"
                                description="一個簡潔有力的任務管理工具"
                                image="images/ch.png"
                                github-link="https://github.com/Diego09182/Chronus"
                            ></project-card>
                        </div>
                        <div class="col-4">
                            <project-card
                                title="SwiftFox"
                                description="一個藉由Laravel開發支援論壇、文章、投票、圖片上傳的學生交流系統"
                                image="images/SWIFT FOX LOGO.png"
                                github-link="https://github.com/Diego09182/SwiftFox"
                            ></project-card>
                        </div>
                        <div class="col-4">
                            <project-card
                                title="TNS"
                                description="一個用Laravel串接台灣新聞API的專案範例"
                                image="images/TAIWAN.png"
                                github-link="https://github.com/Diego09182/TNS"
                            ></project-card>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-4">
                            <project-card
                                title="BookShop"
                                description="簡易的電商網站"
                                image="images/SHOP.png"
                                github-link="https://github.com/Diego09182/BookStore"
                            ></project-card>
                        </div>
                        <div class="col-4">
                            <project-card
                                title="Weather"
                                description="氣象資料APP"
                                image="images/weather.png"
                                github-link="https://github.com/Diego09182/Weather"
                            ></project-card>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container py-5">
                <h2 class="pb-2 border-bottom"><b>特色</b></h2>
                <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
                <div class="col">
                    <feature-card title="精實的後端工程" image="images/Laravel.png" technology="Laravel"/>
                </div>
                <div class="col">
                    <feature-card title="優美的前端工程" image="images/Vue.js.png" technology="Vue"/>
                </div>
                <div class="col">
                    <feature-card title="資料庫查詢優化" image="images/MySQL.png" technology="MySQL"/>
                </div>
                </div>
            </div>
            <div class="container my-5">
                <h2 class="pb-2 border-bottom"><b>技術堆棧</b></h2>
                <ul class="nav nav-tabs" id="myTabs" role="tablist">
                    <li class="nav-item" role="presentation">
                        <a class="nav-link active" id="tab1-tab" data-bs-toggle="tab" href="#tab1" role="tab" aria-controls="tab1" aria-selected="true">後端</a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a class="nav-link" id="tab2-tab" data-bs-toggle="tab" href="#tab2" role="tab" aria-controls="tab2" aria-selected="false">前端</a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a class="nav-link" id="tab3-tab" data-bs-toggle="tab" href="#tab3" role="tab" aria-controls="tab3" aria-selected="false">資料庫</a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a class="nav-link" id="tab4-tab" data-bs-toggle="tab" href="#tab4" role="tab" aria-controls="tab4" aria-selected="false">版本控管</a></a></a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a class="nav-link" id="tab5-tab" data-bs-toggle="tab" href="#tab5" role="tab" aria-controls="tab5" aria-selected="false">作業系統</a>
                    </li>
                </ul>
                <div class="tab-content mt-2">
                    <div class="tab-pane fade show active" id="tab1" role="tabpanel" aria-labelledby="tab1-tab">
                        <laravel></laravel>
                    </div>
                    <div class="tab-pane fade" id="tab2" role="tabpanel" aria-labelledby="tab2-tab">
                        <vue></vue>
                    </div>
                    <div class="tab-pane fade" id="tab3" role="tabpanel" aria-labelledby="tab3-tab">
                        <mysql></mysql>
                    </div>
                    <div class="tab-pane fade" id="tab4" role="tabpanel" aria-labelledby="tab4-tab">
                        <git></git>
                    </div>
                    <div class="tab-pane fade" id="tab5" role="tabpanel" aria-labelledby="tab5-tab">
                        <linux></linux>
                    </div>
                </div>
            </div>
            <slogan></slogan>
        </div>`
};  

const About = { 
    template: 
        `<div>
            <headers></headers>
            <about></about>
        </div>` 
}
 
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
]
 
const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
})

const app = Vue.createApp({ });

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
                        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                            <li><a class="nav-link px-2 text-white"><router-link to="/">Home</router-link></a></li>
                            <li><a class="nav-link px-2 text-white"><router-link to="/about">About</router-link></a></li>
                        </ul>
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
        i: 0,
        speed: 400,
        typedRole: '',
        name: '張皓明',
        introduce: '熱愛學習後端工程技術',
        role: '擅長使用Laravel與Vue開發應用程式',
        websiteLink: 'https://diego09182.github.io/work/#/',
        githubLink: 'https://github.com/Diego09182'
      };
    },
    methods: {
      typeWriter() {
        if (this.i < this.role.length) {
          if (this.i < this.role.length) {
            this.typedRole += this.role.charAt(this.i);
          }
          this.i++;
          setTimeout(this.typeWriter, this.speed);
        }
      },
      openWebsite() {
        window.location.href = this.websiteLink;
      },
      openGithub() {
        window.location.href = this.githubLink;
      }
    },
    mounted() {
      this.typeWriter();
    },
    template: 
        `<section class="banner px-3">
            <div class="container overflow-hidden">
                <div class="row gy-3 gy-lg-0 align-items-lg-center justify-content-lg-between">
                    <div class="col-12 col-lg-6 order-1 order-lg-0">
                        <h1 class="display-3 fw-bold mb-4">{{ name }}</h1>
                        <h2 class="display-5 fw-bold"><b>{{ introduce }}</b></h2>
                        <h2 class="display-5 fw-bold"><b>{{ typedRole }}</b></h2>
                        <br><br><br><br><br><br>
                        <div class="d-grid gap-2 d-sm-flex">
                            <button type="button" class="btn btn-dark btn-lg rounded-pill main-btn" @click="openWebsite"><b>Website</b></button>
                            <button type="button" class="btn btn-outline-dark btn-lg rounded-pill main-btn" @click="openGithub"><b>Github</b></button>
                        </div>
                    </div>
                    <div class="col-12 col-lg-5 text-center">
                        <img class="img-fluid" src="images/Code.png" alt="Coding">
                    </div>
                </div>
            </div>
        </section>`
});


app.component('about', {
    data() {
      return {
        i: 0,
        speed: 200,
        typedAbout: '',
        title: '關於我',
        about: '專精於 Laravel 與 Vue 建立網頁應用程式的工程師。',
      };
    },
    methods: {
      typeWriter() {
        if (this.i <= this.about.length) {
          if (this.i <= this.about.length) {
            this.typedAbout += this.about.charAt(this.i);
          }
          this.i++;
          setTimeout(this.typeWriter, this.speed);
        }
      }
    },
    mounted() {
      this.typeWriter();
    },
    template: 
      `<div class="container py-5">
          <h1 class="text-center"><b>{{ title }}</b></h1>
          <div class="text-center">
              <img src="images/Laravel.png" alt="Your Image" class="rounded-circle" id="avatar">
              <br><br>
              <h2><b>{{ typedAbout }}</b></h2>
          </div>
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
        `<div class="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg hover" :style="{ backgroundImage: 'url(' + image + ')' }">
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
        </div>`
});

app.component('laravel', {
    data() {
        return {
            title: 'Laravel',
            subtitle: '一個漸進式的網頁應用開發框架',
            description: '我使用具有MVC架構、模板引擎、資料庫遷移的PHP框架建構網頁應用程式',
            officialLink: 'https://laravel.com/',
            githubLink: 'https://github.com/laravel/laravel',
            imageSrc: 'images/Laravel.png',
            imageAlt: 'Laravel Framework Image',
            imageWidth: 720
        };
    },
    template: 
        `<div class="container my-5">
            <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
                    <h1 class="display-4 fw-bold lh-1">{{ title }}</h1>
                    <h1 class="display-4 fw-bold lh-1">{{ subtitle }}</h1>
                    <p class="lead">{{ description }}</p>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                        <a :href="officialLink" class="btn btn-danger btn-lg px-4 me-md-2 fw-bold">Laravel</a>
                        <a :href="githubLink" class="btn btn-outline-danger btn-lg px-4">Github</a>
                    </div>
                </div>
                <div class="col-lg-4 offset-lg-1 p-0 position-relative overflow-hidden shadow-lg">
                    <div class="position-lg-absolute top-0 left-0 overflow-hidden">
                        <img class="img-fluid" :src="imageSrc" :alt="imageAlt" :width="imageWidth">
                    </div>
                </div>
            </div>
        </div>`
});

app.component('vue', {
    data() {
        return {
            title: 'Vue.js',
            subtitle: '一個漸進式的前端開發框架',
            description: '我使用具有聲明式渲染與反應性的JavaScript框架建構網頁應用程式',
            officialLink: 'https://vuejs.org/',
            githubLink: 'https://github.com/vuejs/vue',
            imageSrc: 'images/Vue.js.png',
            imageAlt: 'Vue Framework Image',
            imageWidth: 720
        };
    },
    template: 
        `<div class="container my-5">
            <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
                    <h1 class="display-4 fw-bold lh-1">{{ title }}</h1>
                    <h1 class="display-4 fw-bold lh-1">{{ subtitle }}</h1>
                    <p class="lead">{{ description }}</p>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                        <a :href="officialLink" class="btn btn-success btn-lg px-4 me-md-2 fw-bold">Vue.js</a>
                        <a :href="githubLink" class="btn btn-outline-success btn-lg px-4">Github</a>
                    </div>
                </div>
                <div class="col-lg-4 offset-lg-1 p-0 position-relative overflow-hidden shadow-lg">
                    <div class="position-lg-absolute top-0 left-0 overflow-hidden">
                        <img class="img-fluid" :src="imageSrc" :alt="imageAlt" :width="imageWidth">
                    </div>
                </div>
            </div>
        </div>`
});

app.component('mysql', {
    data() {
        return {
            title: 'MySQL',
            subtitle: '一個開放原始碼的關聯式資料庫管理系統',
            description: '我使用最熱門的資料庫管理系統，支援資料庫服務',
            officialLink: 'https://www.mysql.com/',
            githubLink: 'https://github.com/mysql/mysql-server',
            imageSrc: 'images/MySQL.png',
            imageAlt: 'MySQL Image',
            imageWidth: 720
        };
    },
    template: 
        `<div class="container my-5">
            <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
                    <h1 class="display-4 fw-bold lh-1">{{ title }}</h1>
                    <h1 class="display-4 fw-bold lh-1">{{ subtitle }}</h1>
                    <p class="lead">{{ description }}</p>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                        <a :href="officialLink" class="btn btn-info btn-lg px-4 me-md-2 fw-bold">MySQL</a>
                        <a :href="githubLink" class="btn btn-outline-info btn-lg px-4">Github</a>
                    </div>
                </div>
                <div class="col-lg-4 offset-lg-1 p-0 position-relative overflow-hidden shadow-lg">
                    <div class="position-lg-absolute top-0 left-0 overflow-hidden">
                        <img class="img-fluid" :src="imageSrc" :alt="imageAlt" :width="imageWidth">
                    </div>
                </div>
            </div>
        </div>`
});

app.component('git', {
    data() {
        return {
            title: 'GIT',
            subtitle: '一個分散式版本控制軟體',
            description: '對於所有的專案進行版本控管與追蹤開發進度',
            officialLink: 'https://git-scm.com/',
            githubLink: 'https://github.com/mysql/mysql-server',
            imageSrc: 'images/GIT.png',
            imageAlt: 'GIT Image',
            imageWidth: 720
        };
    },
    template: 
        `<div class="container my-5">
            <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
                    <h1 class="display-4 fw-bold lh-1">{{ title }}</h1>
                    <h1 class="display-4 fw-bold lh-1">{{ subtitle }}</h1>
                    <p class="lead">{{ description }}</p>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                        <a :href="officialLink" class="btn btn-dark btn-lg px-4 me-md-2 fw-bold">GIT</a>
                    </div>
                </div>
                <div class="col-lg-4 offset-lg-1 p-0 position-relative overflow-hidden shadow-lg">
                    <div class="position-lg-absolute top-0 left-0 overflow-hidden">
                        <img class="img-fluid" :src="imageSrc" :alt="imageAlt" :width="imageWidth">
                    </div>
                </div>
            </div>
        </div>`
});

app.component('linux', {
    data() {
        return {
            title: 'Linux',
            subtitle: '一種自由和開放原始碼的類UNIX作業系統',
            description: '使用開源的作業系統進行開發與部屬',
            officialLink: 'https://www.linux.org/pages/download/',
            githubLink: 'https://github.com/torvalds/linux',
            imageSrc: 'images/Linux.png',
            imageAlt: 'Linux Image',
            imageWidth: 720
        };
    },
    template: 
        `<div class="container my-5">
            <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
                    <h1 class="display-4 fw-bold lh-1">{{ title }}</h1>
                    <h1 class="display-4 fw-bold lh-1">{{ subtitle }}</h1>
                    <p class="lead">{{ description }}</p>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                        <a :href="officialLink" class="btn btn-warning btn-lg px-4 me-md-2 fw-bold">Linux</a>
                        <a :href="githubLink" class="btn btn-outline-warning btn-lg px-4">Github</a>
                    </div>
                </div>
                <div class="col-lg-4 offset-lg-1 p-0 position-relative overflow-hidden shadow-lg">
                    <div class="position-lg-absolute top-0 left-0 overflow-hidden">
                        <img class="img-fluid" :src="imageSrc" :alt="imageAlt" :width="imageWidth">
                    </div>
                </div>
            </div>
        </div>`
});

app.component('slogan', {
    data() {
        return {
            title:'Web development',
            slogan:'I am committed to learning web development.',
            githublink:'https://github.com/Diego09182/work'
        };
    },
    template: 
        `<div class="bg-dark text-secondary px-4 py-5 text-center">
            <div class="py-5">
                <h1 class="display-5 fw-bold text-white">{{ title }}</h1>
                <div class="col-lg-6 mx-auto">
                    <p class="fs-5 mb-4">{{ slogan }}</p>
                    <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <a :href="githublink" class="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold">Github</a>
                    </div>
                </div>
            </div>
        </div>`
})

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

app.use(router)

app.mount('#app')
