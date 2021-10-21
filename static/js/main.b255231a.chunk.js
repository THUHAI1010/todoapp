(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){e.exports=a(22)},19:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),l=a(10),i=a.n(l),c=(a(18),a(19),a(11)),o=a(1),m=a(2),r=a(4),d=a(3),u=a(5),h=a(6),b=a.n(h),f=function(e){function t(){return Object(o.a)(this,t),Object(r.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.item,a=e.handleChange,n=e.handleSubmit,l=e.editItem;return s.a.createElement("div",{className:"card card-body my-3"},s.a.createElement("form",{onSubmit:n},s.a.createElement("div",{className:"input-group"},s.a.createElement("div",{className:"input-group-prepend"},s.a.createElement("div",{className:"input-group-text bg-info text-white"},s.a.createElement("i",{className:"fas fa-book"}))),s.a.createElement("input",{type:"text",className:"form-control",placeholder:"New Todo",value:t,onChange:a})),s.a.createElement("button",{type:"submit",className:"btn btn-block mt-3 ".concat(l?"btn-success":"btn-info")},l?"Edit task":"Add new task")))}}]),t}(n.Component),p=function(e){function t(){return Object(o.a)(this,t),Object(r.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.id,a=e.title,n=e.handleDelete,l=e.handleEdit,i=e.handleDoneTask,c=e.completed;return s.a.createElement("li",{className:"list-group-item d-flex justify-content-between my-2"},s.a.createElement("h6",{className:"mt-1 mb-0 align-middle ".concat(c?"completed-task":"")},a),s.a.createElement("div",{className:"todo-icon"},s.a.createElement("span",{className:"mx-2 ".concat(c?"text-success":"text-secondary"),onClick:function(){return i(t)}},s.a.createElement("i",{className:"".concat(c?"far fa-check-square":"far fa-square")})),s.a.createElement("span",{className:"mx-2 text-warning",onClick:l},s.a.createElement("i",{className:"fas fa-pen"})),s.a.createElement("span",{className:"mx-2 text-danger",onClick:n},s.a.createElement("i",{className:"fas fa-trash"}))))}}]),t}(n.Component),E=function(e){function t(){return Object(o.a)(this,t),Object(r.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.items,a=e.updateTodosToShow,l=e.clearList,i=e.handleDelete,c=e.handleEdit,o=e.handleDoneTask,m=e.handleDeleteDoneTasks;return s.a.createElement(n.Fragment,null,s.a.createElement("h3",{className:"text-center"},"TodoList"),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-4"},s.a.createElement("button",{type:"button",className:"btn btn-info btn-block mt-1",onClick:function(){return a("all")}},"All")),s.a.createElement("div",{className:"col-md-4"},s.a.createElement("button",{type:"button",className:"btn btn-info btn-block mt-1",onClick:function(){return a("done")}},"Done")),s.a.createElement("div",{className:"col-md-4"},s.a.createElement("button",{type:"button",className:"btn btn-info btn-block mt-1",onClick:function(){return a("todo")}},"Todo"))),0===t.length?"":s.a.createElement("ul",{className:"list-group my-5"},t.map(function(e){return s.a.createElement(p,{key:e.id,id:e.id,title:e.title,completed:e.completed,handleDelete:function(){return i(e.id)},handleEdit:function(){return c(e.id)},handleDoneTask:o})}),s.a.createElement("div",{className:"row mt-4"},s.a.createElement("div",{className:"col-md-6"},s.a.createElement("button",{type:"button",className:"btn btn-danger btn-block mt-1",onClick:m},"Delete done tasks")),s.a.createElement("div",{className:"col-md-6"},s.a.createElement("button",{type:"button",className:"btn btn-danger btn-block mt-1",onClick:l},"Delete all tasks")))))}}]),t}(n.Component),k=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(r.a)(this,Object(d.a)(t).call(this,e))).handleChange=function(e){a.setState({item:e.target.value})},a.handleSubmit=function(e){e.preventDefault();var t={id:a.state.id,title:a.state.item,completed:!1},n=[].concat(Object(c.a)(a.state.items),[t]);a.state.item.length>0&&a.setState({items:n,id:b()(),item:"",editItem:!1})},a.updateTodosToShow=function(e){a.setState({itemsToShow:e})},a.handleDoneTask=function(e,t){var n=a.state.items.map(function(t){return t.id===e&&(t.completed=!t.completed),t});a.setState({items:n})},a.handleDelete=function(e){var t=a.state.items.filter(function(t){return t.id!==e});a.setState({items:t})},a.handleEdit=function(e){var t=a.state.items.filter(function(t){return t.id!==e}),n=a.state.items.find(function(t){return t.id===e});a.setState({items:t,id:e,item:n.title,editItem:!0})},a.handleDeleteDoneTasks=function(){var e=a.state.items.filter(function(e){return!1===e.completed});a.setState({items:e})},a.clearList=function(){a.setState({items:[]})},a.state={items:[],itemsToShow:"all",id:b()(),item:"",editItem:!1},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=[];return"all"===this.state.itemsToShow?e=this.state.items:"todo"===this.state.itemsToShow?e=this.state.items.filter(function(e){return!e.completed}):"done"===this.state.itemsToShow&&(e=this.state.items.filter(function(e){return e.completed})),s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-10 col-md-8 mx-auto mt-4"},s.a.createElement("h3",{className:"text-capitalize text-center"},"TodoInput"),s.a.createElement(f,{item:this.state.item,handleChange:this.handleChange,handleSubmit:this.handleSubmit}),s.a.createElement(E,{items:e,filterDoneTasks:this.filterDoneTasks,clearList:this.clearList,handleDelete:this.handleDelete,handleEdit:this.handleEdit,handleDoneTask:this.handleDoneTask,handleDeleteDoneTasks:this.handleDeleteDoneTasks,updateTodosToShow:this.updateTodosToShow}))))}}]),t}(n.Component);i.a.render(s.a.createElement(k,null),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.b255231a.chunk.js.map