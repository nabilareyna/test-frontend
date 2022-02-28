<template>
    <main id="" class="">
        <nav class="sticky top-0 w-full p-2 text-center bg-white shadow-md">
            <h1 class="font-bold text-base">Faktur Gaji</h1>
        </nav>
        <div id="faktur_gaji" class="box-border md:box-content w-full max-h-full border-t-2">
            <section id="header" class="box-border md:box-content w-full max-h-full bg-white">
                <header class="font-bold pt-2 pl-4 text-lg">GJI200121280129001</header>
                <p class="font-light pl-4 pb-2 text-gray-400 text-sm">Dicatat: 31 Januari 2021</p>
            </section>
            <section id="header" class="box-border md:box-content w-full max-h-full border-b-8 bg-white">
                <header class="font-bold border-dashed border-t-2 pl-4 text-lg">Bu Adara Olivia</header>
                <p class="font-light pl-4 pb-2 text-gray-400 text-sm">Periode: 01 Januari 2021 - 31 Januari 2021</p>
            </section>
            <section id="gaji" class="border-t-8">
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
                    <div id="edit_gaji_pokok" class="float-right pt-10">
                        <!-- A property item -->
                        <dl class="container float-right items-center flex justify-between border-b-2 border-white m-2 pt-2">
                            <!-- Property name -->
                            <dt class="text-sm">800.000</dt>
                        </dl>
                    </div>
                    <div id="edit_uang_makan" class="float-right pt-3">
                            <!-- A property item -->
                        <dl class="container float-right items-center flex justify-between border-b-2 border-white m-2 pl-28">
                            <!-- Property name -->
                            <dt class="text-sm">220.000</dt>
                        </dl>
                    </div>
                    <div id="edit_uang_absen" class="float-right pt-3">
                        <dl class="container float-right items-center flex justify-between border-b-2 border-white m-2 pl-12">
                            <!-- Property name -->
                            <dt class="text-sm">264.000</dt>
                        </dl>
                    </div>
                    <div id="edit_uang_transport" class="float-right pt-3">
                        <dl class="container float-right items-center flex justify-between border-b-2 border-white m-2 pl-28">
                            <!-- Property name -->
                            <dt class="text-sm">330.000</dt>
                        </dl>
                    </div>
                    <div id="edit_uang_snack" class="float-right pt-3">
                        <dl class="container float-right items-center flex justify-between border-b-2 border-white m-2 pl-12">
                            <!-- Property name -->
                            <dt class="text-sm">110.000</dt>
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
            <section id="upah_borongan" class="border-t-4">
            <section>
                    <div id="header" class="border-b-2">
                        <header class="text-base font-bold pl-4 pt-4 pb-2">Upah Borongan</header>
                    </div>
                </section>
                <div class="float-left pt-2">
                    <div>
                        <p class="text-sm pl-4">Mencuci</p>
                        <p class="text-xs pl-4 text-gray-400">100KG</p>
                    </div>
                    <div class="pt-1">
                        <p class="text-sm pl-4">Menyetrika</p>
                        <p class="text-xs pl-4 text-gray-400">50KG</p>
                    </div>
                </div>
                <section class="float-right">
                    <div class="">
                        <dl class="container float-right items-center flex justify-between border-b-2 border-white m-2 pl-12">
                            <!-- Property name -->
                            <dt class="text-sm pt-1">20.000</dt>

                            
                        </dl>
                    </div>
                    <div class="float-right">
                        <dl class="container float-right items-center flex justify-between border-b-2 border-white m-2 pl-12">
                            <!-- Property name -->
                            <dt class="text-sm pt-1">80.000</dt>

                            <!-- Property value -->
                            
                        </dl>
                    </div>
                </section>
                <section>
                    <div id="subtotal_upah" class="border-b-8">
                        <dl class="container items-center flex justify-between m-2 p-2 border-dashed border-t-2">
                            <!-- Property name -->
                            <dt class="text-base font-semibold pt-2">Subtotal Upah</dt>

                            <!-- Property value -->
                            <dd class="text-base font-semibold pr-4 pt-2">Rp 100.000</dd>
                        </dl>
                    </div>
                </section>
            </section>
            <section>
                <section>
                    <div id="header__komisi" class="border-b-2 border-t-4">
                        <header class="text-base font-bold pt-4 pl-4 pb-2">Komisi</header>
                    </div>
                </section>
                <section class="float-left">
                    
                    
                </section>
                <section>
                    <div id="subtotal_komisi" class="">
                        <dl class="container items-center flex justify-between m-2 p-2 border-dashed border-t-2">
                            <!-- Property name -->
                            <dt class="text-base font-semibold pt-2">Subtotal Komisi</dt>

                            <!-- Property value -->
                            <dd class="text-base font-semibold pr-4 pt-2">Rp 200.000</dd>
                        </dl>
                    </div>
                </section>
            </section>
            <section>
                <div class="border-t-2 border-b-8">
                    <dl class="container items-center flex justify-between m-2 p-1">
                        <!-- Property name -->
                        <dt class="text-lg font-semibold text-green-400 pl-1">Total Gaji Kotor</dt>

                        <!-- Property value -->
                        <dd class="text-lg font-semibold text-green-400 pr-5">Rp 2.824.000</dd>
                    </dl>
                </div>
            </section>
            <section>
                <div class="border-t-4 border-b-2 pb-3">
                    <header class="text-base font-bold pt-4 pl-4">Tanggungan</header>
                    <p class="text-xs pl-4 text-gray-500">Karyawan ini memiliki tanggungan Rp 570.000</p>
                </div>
            </section>
            <section class="float-left">
                
                <div class="pb-3">
                    <p class="text-sm pl-4">Ganti Barang Hilang</p>
                    <p class="text-xs text-gray-500 pl-4">Baju yang hilang warna merah</p>
                </div>
                <div class="pb-3">
                    <p class="text-sm pl-4">Denda Keterlambatan</p>
                    <p class="text-xs text-gray-500 pl-4">karena terlambat 3 hari berturut - turut</p>
                </div>
            </section>
            <section class="float-right">
                <div class="float-right pr-3">
                    <dl class="container float-right items-center flex justify-between border-b-2 border-white m-2 pt-14">
                        <!-- Property name -->
                        <dt class="text-sm text-red-500">50.000</dt>
                    </dl>
                </div>       
            </section>
            <section>
                <div class="float-right pr-3">
                    <dl class="container float-right items-center flex justify-between border-b-2 border-white m-2 pt-3">
                        <!-- Property name -->
                        <dt class="text-sm text-red-500">50.000</dt>
                    </dl>
                </div>
            </section>
            <section class="">
                <div class="border-b-8">
                    <dl class="container items-center flex justify-between m-2 p-1 border-dashed border-t-2 pt-4">
                        <!-- Property name -->
                        <dt class="text-lg font-semibold pl-1">Tanggungan Dibayar</dt>

                        <!-- Property value -->
                        <dd class="text-lg font-semibold text-red-500 pr-6">(-) Rp 70.000</dd>
                    </dl>
                </div>
            </section>
            <section class="border-t-4 pt-4">
                <div class="inline-block pl-4">
                    <p class="text-xl font-bold text-blue-500">Total Gaji Bersih</p>
                </div>
                <div class="inline-block">
                    <img src="../assets/checkicon.svg" alt="">
                </div>
                <div class="inline-block pl-14">
                    <p class="text-xl font-bold text-blue-500 pl-2">Rp 2.124.000</p>
                </div>
                <div class="pl-4 pt-2 pb-4">
                    <p class="text-xs text-gray-500">Nominal akhir yang diterima karyawan setelah ditambah komisi dikurangi pembayaran tanggungan (jika ada).</p>
                </div>
                <div class="flex justify-center pb-8">
                    <router-link to='/'>
                        <button class="bg-green-600 hover:bg-green-700 text-white text-base font-semibold py-3 px-32 rounded">
                            Cetak 
                        </button>
                    </router-link>
                </div>
            </section>
        </div>
    </main>
</template>

<script></script>

<style src="../assets/tailwind.css">