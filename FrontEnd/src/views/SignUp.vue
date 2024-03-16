<template>
  <body>
    <div
      class="container shadow-2xl  mx-auto flex justify-center items-center rounded-3xl border-2 border-green-300"
    >
      <div class="banner">
        <img src="../assets/doctor.png" class="doctor rounded-3xl shadow-2xl z-5" />
      </div>
      <div class="detail flex justify-start items-center flex-col">
        <img src="../assets/Vitalink.png" class="logo"/>
        <h1>SignUp</h1>
        <div class="inps">
          <div class="email flex flex-row mb-2 p-5">
            <h3>Email :</h3>
            <input type="text" placeholder="Enter the email..." class="outline-none border-2 ml-5 p-3"/>
          </div>
          <div class="password flex flex-row mb-5 p-5">
            <h3>Password :</h3>
            <input type="text" placeholder="Enter the Password..." class="outline-none border-2 ml-5 p-3"/>
          </div>
        </div>
        <button class="p-3 border-2 rounded-3xl">Submit</button>
      </div>
    </div>
  </body>
</template>

<script setup></script>

<style scoped>
body {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.detail {
    height: 60vh;
    width: 50vw;
}
.doctor {
    height: 60vh;
    width: 85vw;
}
.logo {
    height: 200px;
}
h1 {
    font-size: 40px;
}
</style>
