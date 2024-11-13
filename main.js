const domElements = {
    palletFormEl: document.getElementById('palletForm'),
    caseWidthEl: document.getElementById('caseWidth'),
    caseLengthEl: document.getElementById('caseLength'),
    caseHeightEl: document.getElementById('caseHeight'),
    palletSizeEl: document.getElementById('palletSize'),
    loadHeightEl: document.getElementById('loadHeight')
}


domElements.palletFormEl.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log('clicked')
    
})