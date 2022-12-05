function nhiet(){
    let c = +document.getElementById('nhietdo').value
    let f = (9*c + 160)/5
    document.getElementById('dof').innerText = 'Faraday: '+f
}