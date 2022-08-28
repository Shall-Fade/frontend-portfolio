<template>
  <div class="h-[350px] pointer-events-none">
    <Renderer
      :alpha="true"
      :antialias="true"
      :orbit-ctrl="{ autoRotate: true }"
      width="500"
      height="500"
      ref="renderer"
    >
      <!-- Японский Мост -->
      <!-- <Camera :position="{ x: 0, y: 14, z: 16 }" /> -->
      <!-- Компьютер-террариум -->
      <!-- <Camera :position="{ x: 0, y: 4, z: 5 }" /> -->
      <Camera :position="{ x: 0, y: 3, z: 5 }" />
      <Scene>
        <AmbientLight></AmbientLight>
        <GltfModel
          src="../../../src/assets/models/computer-terrarium/scene.gltf"
        />
      </Scene>
    </Renderer>
  </div>
</template>
