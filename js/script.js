window.onload = function() {
    let scene = new THREE.Scene();
    let width = document.getElementById('render').clientWidth - 350;
    let height = document.getElementById('render').clientHeight/2 - 50;
    let camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000)
    let renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);
    
    document.getElementById('render').insertBefore(renderer.domElement, document.getElementById('render').firstChild);
    document.getElementById('2d').width = width;
    document.getElementById('2d').height = height

    console.log(document.getElementById('2d'));

    let geometry = new THREE.BoxGeometry(10, 10, 10);
    let material = new THREE.MeshBasicMaterial({color: 0x0000FF });
    
    let cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    
    camera.position.z = 25;
    
    function render() {
        requestAnimationFrame(render);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render(scene, camera);
    }
    
    render();
}