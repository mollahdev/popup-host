export default class Sidebar {
    sidebarSettings = {
        wheelSpeed: 2,
        wheelPropagation: true,
        minScrollbarLength: 20
    }
    sidebarInit() {
        const ps  = new PerfectScrollbar('.customizer__sidebar', this.sidebarSettings );
        this.sidebarSettings.ps = ps;
    }

}