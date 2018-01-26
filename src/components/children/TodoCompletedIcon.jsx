/** React */
import React, { Component } from 'react';

class TodoCompletedIcon extends Component {

  /** render */
  render() {
    return (
      <img
        alt='Completado'
        className='todos-todo__check todos-todo__check--on'
        src='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEyOCAxMjg7IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxMjggMTI4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiMzMUFGOTE7fQoJLnN0MXtmaWxsOiNGRkZGRkY7fQo8L3N0eWxlPjxnPjxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjY0IiBjeT0iNjQiIHI9IjY0Ii8+PC9nPjxnPjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik01NC4zLDk3LjJMMjQuOCw2Ny43Yy0wLjQtMC40LTAuNC0xLDAtMS40bDguNS04LjVjMC40LTAuNCwxLTAuNCwxLjQsMEw1NSw3OC4xbDM4LjItMzguMiAgIGMwLjQtMC40LDEtMC40LDEuNCwwbDguNSw4LjVjMC40LDAuNCwwLjQsMSwwLDEuNEw1NS43LDk3LjJDNTUuMyw5Ny42LDU0LjcsOTcuNiw1NC4zLDk3LjJ6Ii8+PC9nPjwvc3ZnPg=='
      />
    );
  }
  
}

export default TodoCompletedIcon;
