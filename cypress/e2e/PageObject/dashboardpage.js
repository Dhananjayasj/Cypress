class dashboardPage{
    pimMenu(){
        return'a[href="/web/index.php/pim/viewPimModule"]'
    }
    dashBoardMenu(){
        return 'a[href="/web/index.php/performance/viewPerformanceModule"]'
    }
    timeandWorkHeader(){
        return ' hjg'
    }

}
const dashBoard = new dashboardPage()
export default dashBoard