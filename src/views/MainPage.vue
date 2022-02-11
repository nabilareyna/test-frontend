<template>
    <div class="">
        <nav class="sticky top-0 box-border w-full p-3 text-center bg-white shadow-sm">
            <h1 class="font-bold text-lg">Faktur Gaji</h1>
        </nav>
        <main id="fraktur_gaji" class="box-border md:box-content w-full max-h-full border-t-2">
            <section id="header" class="box-border md:box-content w-full max-h-full border-dashed border-b-2 bg-white">
                <header class="font-bold pt-4 pb-1 pl-4 text-xl">Bu Adara Olivia</header>
                <p class="font-light pl-4 pb-3 text-gray-400">01 Januari 2021 - 31 Januari 2021</p>
            </section>
            <section id="kehadiran" class="box-border w-full h-full pt-3 border-b-8 pb-3">
                <div>
                    <!-- A property item -->
                    <dl class="container items-center flex justify-between border-b-2 border-white m-0 p-3">
                        <!-- Property name -->
                        <dt class="text-gray-400 font-semibold">Masuk 22 Hari</dt>
                        <!-- Property value -->
                        <dd class="text-blue-600 font-semibold">Ubah Kehadiran</dd>
                    </dl>
                </div>
            </section>
            <section id="gaji" class="">
                <div id="header__gaji">
                    <header class="font-bold text-xl p-4 pl-4">Gaji</header>
                </div>
                <div id="container__">
                    <!-- A property item -->
                    <dl class="container items-center flex justify-between border-b-2 border-white m-0 p-2">
                        <!-- Property name -->
                        <dt class="text-lg font-normal pl-4 ">Gaji Pokok</dt>

                        <!-- Property value -->
                        <dd class="text-lg font-normal justify-items-end">800.000</dd>
                        <dd class="">...</dd>
                    </dl>
                </div>
            </section>
        </main>
    </div>
</template>

<script>
export default {
    
};
</script>

<style src="../assets/tailwind.css">