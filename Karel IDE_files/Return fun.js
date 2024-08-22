function sum(math,eng,sci)
{
    var s=math + eng + sci;

    return s;
}
function percentage(t)
{
    var per=t/300*100;
    document.write(per);
}

var total= sum(80,80,80);
percentage(total);