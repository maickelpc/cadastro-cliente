<script>

export default {
  mounted() {
    var links = document.getElementsByClassName("side-nav-link-ref");
    var matchingMenuItem = null;
    for (var i = 0; i < links.length; i++) {
      if (window.location.pathname === links[i].pathname) {
        matchingMenuItem = links[i];
        break;
      }
    }

    if (matchingMenuItem) {
      matchingMenuItem.classList.add("active");
      var parent = matchingMenuItem.parentElement;

      if (parent) {
        parent.classList.add("active");
        const parent2 = parent.parentElement;
        if (parent2) {
          parent2.classList.add("active");
        }
        const parent3 = parent2.parentElement;
        if (parent3) {
          parent3.classList.add("active");
          var childAnchor = parent3.querySelector(".has-dropdown");
          if (childAnchor) childAnchor.classList.add("active");
        }

        const parent4 = parent3.parentElement;
        if (parent4) parent4.classList.add("active");
        const parent5 = parent4.parentElement;
        if (parent5) parent5.classList.add("active");
      }
    }
  },
  methods: {
    onMenuClick(event) {
      event.preventDefault();
      const nextEl = event.target.nextElementSibling;
      if (nextEl && !nextEl.classList.contains("show")) {
        const parentEl = event.target.parentNode;
        if (parentEl) {
          parentEl.classList.remove("show");
        }
        nextEl.classList.add("show");
      } else if (nextEl) {
        nextEl.classList.remove("show");
      }
      return false;
    },
    /**
     * Returns true or false if given menu item has child or not
     * @param item menuItem
     */
    hasItems(item) {
      return item.subItems !== undefined ? item.subItems.length > 0 : false;
    },
    topbarLight() {
      document.body.setAttribute("data-topbar", "light");
      document.body.removeAttribute("data-layout-size", "boxed");
    },
    boxedWidth() {
      document.body.setAttribute("data-layout-size", "boxed");
      document.body.removeAttribute("data-topbar", "light");
      document.body.setAttribute("data-topbar", "dark");
    },
    coloredHeader() {
      document.body.setAttribute("data-topbar", "colored");
      document.body.removeAttribute("data-layout-size", "boxed");
    },
  }
};
</script>
<template>
<div>
  <header id="page-topbar">
    <div class="navbar-header">
        <div class="d-flex">
            <div class="navbar-brand-box">
                <router-link :to="{name: 'main'}" class="logo logo-dark">
                    <span class="logo-sm">
                        <img src="/assets/system/images/logo.png" alt="" height="40">
                    </span>
                    <span class="logo-lg">
                        <img src="/assets/system/images/logo-dark.png" alt="" height="40">
                    </span>
                </router-link>

                <router-link :to="{name: 'main'}" class="logo logo-light">
                    <span class="logo-sm">
                        <img src="/assets/system/images/logo-light.png" alt="" height="40">
                    </span>
                    <span class="logo-lg">
                        <img src="/assets/system/images/logo-light.png" alt="" height="40">
                    </span>
                </router-link>
            </div>

            <button type="button" class="btn btn-sm px-3 font-size-16 d-lg-none header-item waves-effect waves-light" data-toggle="collapse" data-target="#topnav-menu-content">
                <i class="fa fa-fw fa-bars"></i>
            </button>

        
            <div class="dropdown dropdown-mega d-none d-lg-block ml-2">
                
                
                <div class="dropdown-menu dropdown-megamenu">
                    <div class="row">
                        <div class="col-sm-8">
    
                            <div class="row">
                                <div class="col-md-4">
                                    <h5 class="font-size-14 mt-0" >UI Components</h5>
                                    <ul class="list-unstyled megamenu-list">
                                        <li>
                                            <a href="javascript:void(0);" >Lightbox</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" >Range Slider</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" >Sweet Alert</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" >Rating</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" >Forms</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" >Tables</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" >Charts</a>
                                        </li>
                                    </ul>
                                </div>

                                <div class="col-md-4">
                                    <h5 class="font-size-14 mt-0" key="t-applications">Applications</h5>
                                    <ul class="list-unstyled megamenu-list">
                                        <li>
                                            <a href="javascript:void(0);" key="t-ecommerce">Ecommerce</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" key="t-calendar">Calendar</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" key="t-email">Email</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" key="t-projects">Projects</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" key="t-tasks">Tasks</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" key="t-contacts">Contacts</a>
                                        </li>
                                    </ul>
                                </div>

                                <div class="col-md-4">
                                    <h5 class="font-size-14 mt-0" key="t-extra-pages">Extra Pages</h5>
                                    <ul class="list-unstyled megamenu-list">
                                        <li>
                                            <a href="javascript:void(0);" key="t-light-sidebar">Light Sidebar</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" key="t-compact-sidebar">Compact Sidebar</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" key="t-horizontal">Horizontal layout</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" key="t-maintenance">Maintenance</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" key="t-coming-soon">Coming Soon</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" key="t-timeline">Timeline</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" key="t-faqs">FAQs</a>
                                        </li>
                            
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="row">
                                <div class="col-sm-6">
                                    <h5 class="font-size-14 mt-0" key="t-ui-components">Configurações</h5>
                                    <ul class="list-unstyled megamenu-list">
                                        
                                        <li>
                                            <a href="javascript:void(0);" key="t-sweet-alert">Sweet Alert</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" key="t-rating">Rating</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" key="t-forms">Forms</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" key="t-tables">Tables</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" key="t-charts">Charts</a>
                                        </li>
                                    </ul>
                                </div>

                                <div class="col-sm-5">
                                    <div>
                                        <img src="/assets/system/images/megamenu-img.png" alt="" class="img-fluid mx-auto d-block">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div> 
            </div>

             <div class="app-search d-none d-lg-block">
             
            </div>
        </div>


        <div class="d-flex">
            <div class="dropdown d-inline-block d-lg-none ml-2">
                <button type="button" class="btn header-item noti-icon waves-effect" id="page-header-search-dropdown"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="mdi mdi-magnify"></i>
                </button>
                <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right p-0"
                    aria-labelledby="page-header-search-dropdown">
                    
                    <form class="p-3">
                        <div class="form-group m-0">
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="Search ..." aria-label="Recipient's username">
                                <div class="input-group-append">
                                    <button class="btn btn-primary" type="submit"><i class="mdi mdi-magnify"></i></button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <div class="dropdown d-none d-lg-inline-block ml-1">
                <button type="button" class="btn header-item noti-icon waves-effect" data-toggle="fullscreen">
                    <i class="bx bx-fullscreen"></i>
                </button>
            </div>

            <div class="dropdown d-inline-block">
                <!-- <button type="button" class="btn header-item waves-effect" id="page-header-user-dropdown"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <img class="rounded-circle header-profile-user" src="/assets/system/images/users/avatar-1.jpg"
                        alt="Header Avatar">
                    <i class="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
                </button> -->
                <!-- <div class="dropdown-menu dropdown-menu-right">
                    
                    <a class="dropdown-item" href="#" data-toggle="modal" data-backdrop="static" data-target=".bs-modal-trocar-senha"><i class="bx bx-lock-open font-size-16 align-middle mr-1"></i> <span key="t-lock-screen">Trocar Senha</span></a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item text-danger" href="#" @click.prevent="logout()"><i class="bx bx-power-off font-size-16 align-middle mr-1 text-danger"></i> <span key="t-logout">Logout</span></a>
                </div> -->
            </div>

          
            
        </div>
    </div>
</header>

<div class="topnav">
    <div class="container-fluid">
        <nav class="navbar navbar-light navbar-expand-lg topnav-menu">

            <div class="collapse navbar-collapse" id="topnav-menu-content">
                <ul class="navbar-nav">

                    <li class="nav-item dropdown">
                        <router-link class="nav-link dropdown-toggle arrow-none" :to="{name: 'customers.index'}" id="topnav-dashboard" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="bx bx bxs-user-circle mr-2"></i><span >Clientes</span> 
                        </router-link>
                    </li>
                    <li class="nav-item dropdown">
                        <router-link class="nav-link dropdown-toggle arrow-none" :to="{name: 'customers.create'}" id="topnav-dashboard" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="bx bx bxs-user-plus mr-2"></i><span >Novo</span> 
                        </router-link>
                    </li>

                </ul>
            </div>
        </nav>
    </div>
</div>
</div>
</template>
