
    const palletFormEl = document.getElementById('palletForm')
    const caseWidthEl = document.getElementById('caseWidth')
    const caseLengthEl = document.getElementById('caseLength')
    const caseHeightEl = document.getElementById('caseHeight')
    const palletSizeEl = document.getElementById('palletSize')
    const loadHeightEl = document.getElementById('loadHeight')



palletFormEl.addEventListener('submit', (e) => {
    e.preventDefault()
    
    const caseData = {
        caseWidth: caseWidthEl.value,
        caseLength: caseLengthEl.value,
        caseHeight: caseHeightEl.value
    }

    const palletData = {
        palletSize: palletSizeEl.value,
        loadHeight: loadHeightEl.value
    }
    
    

    console.log(caseData, palletData)
})