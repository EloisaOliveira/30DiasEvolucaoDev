function horarioBrasilia(){
  date = new Date()
  dateBrasilia = date.toLocaleString();

  const div = document.getElementById('hrBrasilia')
  div.innerHTML = "<h2>" + dateBrasilia + "</h2>";
}

function horarioLondres(){
  date = new Date()
  dateLondres = date.toLocaleString('en-GB', {timeZone: 'Europe/London'});

  const div = document.getElementById('hrLondres')
  div.innerHTML = "<h2>" + dateLondres + "</h2>";
}