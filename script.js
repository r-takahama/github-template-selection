// var title = $(".title");
// var block = $(".title *");
// block.css("display", "inline");
var select = $("<select style=\"float: right;\"><option value=\"-1\">–プロジェクト・業務を選択–</option></select>");
var projects = [{name:"Project1",id:"1111"}, {name:"Project2", id:"2222"}, {name:"Project3", id:"3333"}];
for (var i = 0; i < projects.length; i++) {
  // var opt = $("" + projects[i].name + "");
  var opt = "<option value=\"" + i + "\">" + projects[i].name + "</option>"
  select.append(opt);
}
// title.append(select);
console.log(select)

// $('#issue_body')[0].defaultValue = 'hoge';
// console.log($('#issue_body')[0].defaultValue);
$('.toolbar-commenting').append(select);