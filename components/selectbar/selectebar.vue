<template>
    <div class="col-lg-12">
                        <ul class="m-0 p-0" style="width: 100%; height: 100px;">
                        <li>Menu 0
                            <ul class="dropdown-content">
                                <li>Submenu 1-1</li>
                                <li>Submenu 1-2</li>
                            </ul>
                        </li>
                        <li>Menu 2
                            <ul class="dropdown-content">
                                <li>Submenu 2-1</li>
                                <li>Submenu 2-2</li>
                            </ul>
                        </li>
                        <li>Menu 3
                            <ul class="dropdown-content">
                                <li>Submenu 2-1</li>
                                <li>Submenu 2-2</li>
                            </ul>
                        </li>
                        <li>Menu 4
                            <ul class="dropdown-content">
                                <li>Submenu 2-1</li>
                                <li>Submenu 2-2</li>
                            </ul>
                        </li>
                        <li>Menu 5
                            <ul class="dropdown-content">
                                <li>Submenu 2-1</li>
                                <li>Submenu 2-2</li>
                            </ul>
                        </li>
                        </ul>
                    </div>
</template>

<style>
ul {
    list-style: none;
    padding: 0;
    width: 200px;
}
li {
    background: #f0f0f0;
    padding: 10px;
    position: relative;
    cursor: pointer;
}
li:hover {
    background: #ddd;
}
.dropdown-content {
    display: none;
    position: absolute;
    left: 100%;
    top: 0;
    background: #fff;
    border: 1px solid #ccc;
    min-width: 150px;
    z-index: 1;
}
li:hover .dropdown-content {
    display: block;
}
</style>