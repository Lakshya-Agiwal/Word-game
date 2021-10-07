var score=0;
function update()
{
    score=score+1;
    document.getElementById("out").innerHTML="Score "+score;
}
function save()
{
   localStorage.setItem("save" ,score );
}
function next()
{
    window.location="https://www.youtube.com/";
} 


