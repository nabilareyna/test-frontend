<template>
    <div  id="container" class="">
        <nav class="sticky top-0 box-border w-full p-2 text-center bg-white shadow-sm">
            <h1 class="font-bold text-base">Faktur Gaji</h1>
        </nav>
        <main id="faktur_gaji" class="box-border md:box-content w-full max-h-full border-t-2">
            <section id="header" class="box-border md:box-content w-full max-h-full border-dashed border-b-2 bg-white">
                <header class="font-bold pt-2 pl-4 text-lg">Bu Adara Olivia</header>
                <p class="font-light pl-4 pb-2 text-gray-400 text-sm">01 Januari 2021 - 31 Januari 2021</p>
            </section>
            <section id="kehadiran" class="box-border w-full h-full pt-2 border-b-8 pb-2">
                <div>
                    <!-- A property item -->
                    <dl class="container items-center flex justify-between border-b-2 border-white m-0 p-3">
                        <!-- Property name -->
                        <dt class="text-gray-400 font-semibold text-sm">Masuk 22 Hari</dt>
                        <!-- Property value -->
                        <dd class="text-blue-600 font-semibold text-sm">Ubah Kehadiran</dd>
                    </dl>
                </div>
            </section>
            <section id="gaji" class="">
                <div id="container" class="float-left">
                    <div id="header" class="">
                        <header class="font-bold text-base p-3 pl-4">Gaji</header>
                        <div id="details" class="">
                            <div id="gaji__pokok" class="pb-3">
                                <p class="text-sm pl-4">Gaji Pokok</p>
                                <p class="text-xs text-gray-400 pl-4">800.000 x 1 periode</p>
                            </div>
                            <div id="gaji__uang_makan" class="pb-3">
                                <p class="text-sm pl-4">Uang Makan</p>
                                <p class="text-xs pl-4 text-gray-400">10.000 x 22 kehadiran</p>
                            </div>
                            <div id="gaji__uang_absen" class="pb-3">
                                <p class="text-sm pl-4">Uang Absen</p>
                                <p class="text-xs pl-4 text-gray-400">12.000 x 22 kehadiran</p>
                            </div>
                            <div id="gaji__uang_transport" class="pb-3">
                                <p class="text-sm pl-4">Uang Transport</p>
                                <p class="text-xs pl-4 text-gray-400">15.000 x 22 kehadiran</p>
                            </div>
                            <div id="gaji__uang_snack" class="pb-3">
                                <p class="text-sm pl-4">Uang Snack</p>
                                <p class="text-xs pl-4 text-gray-400">5.000 x 22 kehadiran</p>
                            </div>
                        </div>
                    </div>
                </div>
                <section id="editgaji" class="container">
                    <div id="edit_gaji_pokok" class="float-right pt-10 pr-3">
                        <!-- A property item -->
                        <dl class="container float-right items-center flex justify-between border-b-2 border-white m-2 pt-2">
                            <!-- Property name -->
                            <dt class="text-sm">800.000</dt>
                            
                            <!-- Property value -->
                            <img src="../assets/editicon.svg">
                        </dl>
                    </div>
                    <div id="edit_uang_makan" class="float-right pt-2 pr-3">
                            <!-- A property item -->
                        <dl class="container float-right items-center flex justify-between border-b-2 border-white m-2 pl-12">
                            <!-- Property name -->
                            <dt class="text-sm">220.000</dt>

                            <!-- Property value -->
                            <img src="../assets/editicon.svg">
                        </dl>
                    </div>
                    <div id="edit_uang_absen" class="float-right pt-3 pr-3">
                        <dl class="container float-right items-center flex justify-between border-b-2 border-white m-2 pl-12">
                            <!-- Property name -->
                            <dt class="text-sm">264.000</dt>

                            <!-- Property value -->
                            <img src="../assets/editicon.svg">
                        </dl>
                    </div>
                    <div id="edit_uang_transport" class="float-right pt-3 pr-3">
                        <dl class="container float-right items-center flex justify-between border-b-2 border-white m-2 pl-12">
                            <!-- Property name -->
                            <dt class="text-sm">330.000</dt>

                            <!-- Property value -->
                            <img src="../assets/editicon.svg">
                        </dl>
                    </div>
                    <div id="edit_uang_snack" class="float-right pt-3 pr-3">
                        <dl class="container float-right items-center flex justify-between border-b-2 border-white m-2 pl-12">
                            <!-- Property name -->
                            <dt class="text-sm">110.000</dt>

                            <!-- Property value -->
                            <img src="../assets/editicon.svg">
                        </dl>
                    </div>
                </section>
                <section id="subtotal_gaji" class="">
                    <div id="subtotal_gaji" class="border-b-8">
                        <dl class="container items-center flex justify-between m-2 p-2 border-dashed border-t-2">
                                <!-- Property name -->
                                <dt class="text-base font-semibold pt-2">Subtotal Gaji</dt>

                                <!-- Property value -->
                                <dd class="text-base font-semibold pr-4 pt-2">Rp 2.524.000</dd>
                            </dl>
                    </div> 
                </section>   
            </section>
            <section id="upah_borongan">
            <div class="float-left">
                <div id="header" class="">
                    <header class="text-base font-bold p-4">Upah Borongan</header>
                </div>
                <div>
                    <p class="text-sm pl-4">Mencuci</p>
                    <p class="text-xs pl-4 text-gray-400">100KG</p>
                </div>
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