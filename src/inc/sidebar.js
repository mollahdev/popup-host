export default class Sidebar {
    sidebarSettings = {
        wheelSpeed: 2,
        wheelPropagation: true,
        minScrollbarLength: 20
    }
    sidebarInit() {
        console.log(  )
        const ps  = new PerfectScrollbar('.customizer__sidebar--content', this.sidebarSettings );
        this.sidebarSettings.ps = ps;
    }

}