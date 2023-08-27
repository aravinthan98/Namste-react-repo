const heading=React.createElement("h1",{
    id :"title1"
},"Hi");
const heading2=React.createElement("h1",{
    id :"title2"
},"Hello");
const head=React.createElement("div",{
    className:"container"
},heading,heading2);

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(head);