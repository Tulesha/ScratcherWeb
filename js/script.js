window.onload = function() {
    let scene = new THREE.Scene();
    let camera = new THREE.PerspectiveCamera(60, 600 / 287.8, 0.1, 1000)
    let renderer = new THREE.WebGLRenderer();
    renderer.setSize(600, 287.8);
    
    document.getElementById('render').insertBefore(renderer.domElement, document.getElementById('render').firstChild);
    
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