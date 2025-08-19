function launchBrowser(browserName)
{
    
    if(browserName=="Chrome")
    {
        console.log("Using Chrome browser")
    }
    else
    {
        console.log("Using other browsers")
    }
}

function runTests(testType)
{

    switch(testType)
    {
    case "smoke":
        console.log("This is Smoke testing")
        break
    case "sanity":
        console.log("This is Sanity testing")
        break
    case "regression":
        console.log("This is regression testing")
        break
    default:
        console.log("smoke testing")

}
}
launchBrowser("Firefox")
runTests("Beta")