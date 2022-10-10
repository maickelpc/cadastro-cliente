<script>
import HorizontalTopbar from "../components/horizontal-topbar";
import HorizontalNav from "../components/horizontal-nav";
import Footer from "../components/footer";
import Loader from '../components/forms/loader.vue'
/**
 * Horizontal-layout
 */
export default {
  components: {
    HorizontalTopbar,
    HorizontalNav,
    Footer,
    Loader
  },
  data() {
    return {};
  },
  created: () => {
    document.body.setAttribute("data-layout", "horizontal");
    document.body.setAttribute("data-topbar", "dark");
    document.body.removeAttribute("data-sidebar", "dark");
    document.body.removeAttribute("data-layout-size", "boxed");
  },
  methods: {
    toggleRightSidebar() {
      document.body.classList.toggle("right-bar-enabled");
    },
    hideRightSidebar() {
      document.body.classList.remove("right-bar-enabled");
    }
  }
};
</script>

<template>
  <div>
    <!-- Begin page -->
    <div id="layout-wrapper">
      <HorizontalTopbar />
      <HorizontalNav />
      
      <!-- ============================================================== -->
      <!-- Start right Content here -->
      <!-- ============================================================== -->
      <div class="main-content">
        <div class="page-content">
          <div class="container-fluid">
            <loader :is-visible="$root.isLoading"></loader>
            <!-- <slot /> -->
              <router-view ></router-view>
          </div>
          <!-- container-fluid -->
        </div>
        <!-- End Page-content -->
        <Footer />
      </div>
      <!-- end main content-->
    </div>
    <!-- END layout-wrapper -->
  </div>
</template>
