import {Link } from 'react-router-dom';
export default function NotFound() {
return (
<div>
<h1 class="text-center ">404</h1>
<h2 class="text-center ">PAGE NOT FOUND</h2>
<h3><Link to="/" class="text-center">Back to Homepage</Link></h3>


<img src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif" alt="404"   />
</div>
);
}