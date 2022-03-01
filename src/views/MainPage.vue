<template>
    <div  id="maincontainer" v-if="info">
        <nav class="sticky top-0 w-full p-2 text-center bg-white shadow-md">
            <h1 class="font-bold text-base">Faktur Gaji</h1>
        </nav>
        <main id="faktur_gaji" class="box-border md:box-content w-full max-h-full border-t-2">
            <section id="header" class="box-border md:box-content w-full max-h-full border-dashed border-b-2 bg-white">
                <header class="font-bold pt-2 pl-4 text-lg">{{ info.nama_karyawan }}</header>
                <p class="font-light pl-4 pb-2 text-gray-400 text-sm">{{ info.tanggal_awal }} - {{ info.tanggal_akhir }}</p>
            </section>
            <section id="kehadiran" class="box-border w-full h-full pt-2 border-b-8 pb-2">
                <div>
                    <!-- A property item -->
                    <dl class="container items-center flex justify-between border-b-2 border-white m-0 p-3">
                        <!-- Property name -->
                        <dt class="text-gray-400 font-semibold text-sm">Masuk {{ info.total_kehadiran }} Hari</dt>
                        <!-- Property value -->
                        <button class="button text-blue-600 font-semibold text-sm" @click="open = true">
                        Ubah Kehadiran
                        </button>
                            <div v-if="open" class="modal shadow-md rounded">
                                <nav class="w-full p-4 items-center flex bg-white shadow-sm justify-between border-b-2">
                                    <div class="">
                                        <p class="font-bold text-base text-center pl-24">Ubah Kehadiran</p>
                                    </div>
                                    <button @click="open = false" class=""><img src="../assets/closeicon.svg" class=""></button>
                                </nav>
                            </div>
                    </dl>
                </div>
            </section>
            <section id="gaji" class="">
                <div id="container" class="float-left">
                    <div id="header" class="">
                        <header class="font-bold text-base p-3 pl-4">Gaji</header>
                        <div id="details" class="">
                            <div id="gaji__pokok" class="pb-3">
                                <p class="text-sm pl-4">{{ info.pengaturan_gaji[0].nama }}</p>
                                <p class="text-xs text-gray-400 pl-4">{{ info.pengaturan_gaji[0].nominal }} x {{ info.total_periode }} {{ info.pengaturan_gaji[0].jenis }}</p>
                            </div>
                            <div id="gaji__uang_makan" class="pb-3">
                                <p class="text-sm pl-4">{{ info.pengaturan_gaji[1].nama }}</p>
                                <p class="text-xs pl-4 text-gray-400">{{ info.pengaturan_gaji[1].nominal }} x {{ info.total_kehadiran }} {{ info.pengaturan_gaji[1].jenis }}</p>
                            </div>
                            <div id="gaji__uang_absen" class="pb-3">
                                <p class="text-sm pl-4">{{ info.pengaturan_gaji[2].nama }}</p>
                                <p class="text-xs pl-4 text-gray-400">{{ info.pengaturan_gaji[2].nominal }} x {{ info.total_kehadiran }} {{ info.pengaturan_gaji[2].jenis }}</p>
                            </div>
                            <div id="gaji__uang_transport" class="pb-3">
                                <p class="text-sm pl-4">{{ info.pengaturan_gaji[3].nama }}</p>
                                <p class="text-xs pl-4 text-gray-400">{{ info.pengaturan_gaji[3].nominal }} x {{ info.total_kehadiran }} {{ info.pengaturan_gaji[3].jenis }}</p>
                            </div>
                            <div id="gaji__uang_snack" class="pb-3">
                                <p class="text-sm pl-4">{{ info.pengaturan_gaji[4].nama }}</p>
                                <p class="text-xs pl-4 text-gray-400">{{ info.pengaturan_gaji[4].nominal }} x {{ info.total_kehadiran }} {{ info.pengaturan_gaji[4].jenis }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <section id="editgaji" class="container">
                    <div id="edit_gaji_pokok" class="float-right pt-10 pr-3">
                        <!-- A property item -->
                        <dl class="container float-right items-center flex justify-between border-b-2 border-white m-2 pt-2">
                            <!-- Property name -->
                            <dt class="text-sm">{{ (info.pengaturan_gaji[0].nominal) * (info.total_periode) }}</dt>
                            
                            <!-- Property value -->
                            <img src="../assets/editicon.svg">
                        </dl>
                    </div>
                    <div id="edit_uang_makan" class="float-right pt-3 pr-3">
                            <!-- A property item -->
                        <dl class="container float-right items-center flex justify-between border-b-2 border-white m-2 pl-24">
                            <!-- Property name -->
                            <dt class="text-sm">{{ (info.pengaturan_gaji[1].nominal) * (info.total_kehadiran) }}</dt>

                            <!-- Property value -->
                            <img src="../assets/editicon.svg">
                        </dl>
                    </div>
                    <div id="edit_uang_absen" class="float-right pt-3 pr-3">
                        <dl class="container float-right items-center flex justify-between border-b-2 border-white m-2 pl-12">
                            <!-- Property name -->
                            <dt class="text-sm">{{ (info.pengaturan_gaji[2].nominal) * (info.total_kehadiran) }}</dt>

                            <!-- Property value -->
                            <img src="../assets/editicon.svg">
                        </dl>
                    </div>
                    <div id="edit_uang_transport" class="float-right pt-3 pr-3">
                        <dl class="container float-right items-center flex justify-between border-b-2 border-white m-2 pl-12">
                            <!-- Property name -->
                            <dt class="text-sm">{{ (info.pengaturan_gaji[3].nominal) * (info.total_kehadiran) }}</dt>

                            <!-- Property value -->
                            <img src="../assets/editicon.svg">
                        </dl>
                    </div>
                    <div id="edit_uang_snack" class="float-right pt-3 pr-3">
                        <dl class="container float-right items-center flex justify-between border-b-2 border-white m-2 pl-12">
                            <!-- Property name -->
                            <dt class="text-sm">{{ (info.pengaturan_gaji[4].nominal) * (info.total_kehadiran) }}</dt>

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
                                <dd class="text-base font-semibold pr-4 pt-2">Rp {{ ((info.pengaturan_gaji[4].nominal) * (info.total_kehadiran))+((info.pengaturan_gaji[3].nominal) * (info.total_kehadiran))+((info.pengaturan_gaji[2].nominal) * (info.total_kehadiran))+((info.pengaturan_gaji[1].nominal) * (info.total_kehadiran))+((info.pengaturan_gaji[0].nominal) * (info.total_periode)) }}</dd>
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
                        <p class="text-sm pl-4">{{ info.pengaturan_upah[0].nama }}</p>
                        <p class="text-xs pl-4 text-gray-400">{{ info.pengerjaan_upah[1].nominal }} {{ info.pengerjaan_upah[1].satuan }}</p>
                    </div>
                    <div class="pt-1">
                        <p class="text-sm pl-4">{{ info.pengaturan_upah[1].nama }}</p>
                        <p class="text-xs pl-4 text-gray-400">{{ info.pengerjaan_upah[0].nominal }} {{ info.pengerjaan_upah[0].satuan }}</p>
                    </div>
                </div>
                <section class="float-right">
                    <div class="pr-3">
                        <dl class="container float-right items-center flex justify-between border-b-2 border-white m-2 pl-12">
                            <!-- Property name -->
                            <dt class="text-sm pt-1">{{ (info.pengaturan_upah[0].nominal * info.pengerjaan_upah[1].nominal) }}</dt>

                            <!-- Property value -->
                            <img src="../assets/disabledicon.svg">
                        </dl>
                    </div>
                    <div class="float-right pr-3">
                        <dl class="container float-right items-center flex justify-between border-b-2 border-white m-2 pl-12">
                            <!-- Property name -->
                            <dt class="text-sm pt-1">{{ (info.pengaturan_upah[1].nominal * info.pengerjaan_upah[0].nominal) }}</dt>

                            <!-- Property value -->
                            <img src="../assets/disabledicon.svg">
                        </dl>
                    </div>
                </section>
                <section>
                    <div id="subtotal_upah" class="border-b-8">
                        <dl class="container items-center flex justify-between m-2 p-2 border-dashed border-t-2">
                            <!-- Property name -->
                            <dt class="text-base font-semibold pt-2">Subtotal Upah</dt>

                            <!-- Property value -->
                            <dd class="text-base font-semibold pr-4 pt-2">Rp {{ ((info.pengaturan_upah[0].nominal * info.pengerjaan_upah[1].nominal) + (info.pengaturan_upah[1].nominal * info.pengerjaan_upah[0].nominal) ) }}</dd>
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
                    <div id="tambah_komisi" class="container float-left pt-2">
                        <dl class="container items-center flex justify-between m-1 pl-3 pb-1">
                            <img src="../assets/plusicon.svg" alt="">
                            <dt class="text-blue-600 text-sm font-semibold pt-1 p">Tambah komisi lain...</dt>
                        </dl>
                    </div>
                    <div class="pl-5">
                        <p class="text-sm">Bonus Target 1</p>
                    </div>
                </section>
                <section class="float-right">
                    <div class="float-right pr-3 pt-9">
                        <dl class="container float-right items-center flex justify-between border-b-2 border-white m-2 pl-12">
                            <!-- Property name -->
                            <dt class="text-sm">200.000</dt>

                            <!-- Property value -->
                            <img src="../assets/editicon.svg">
                        </dl>
                    </div>
                </section>
                <section>
                    <div id="subtotal_komisi" class="border-b-8">
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
                <div class="border-t-8 border-b-8">
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
                <div id="tambah_komisi" class="container float-left pt-2">
                    <dl class="container float-left items-center flex justify-between m-1 pl-3 pb-3">
                        <img src="../assets/plusicon.svg" alt="">
                        <dt class="text-blue-600 text-sm font-semibold pt-1">Tambah pembayaran tanggungan...</dt>
                    </dl>
                </div>
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

                        <!-- Property value -->
                        <img src="../assets/editred.svg">
                    </dl>
                </div>       
            </section>
            <section>
                <div class="float-right pr-3">
                    <dl class="container float-right items-center flex justify-between border-b-2 border-white m-2 pt-3">
                        <!-- Property name -->
                        <dt class="text-sm text-red-500">50.000</dt>

                        <!-- Property value -->
                        <img src="../assets/editred.svg">
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
                        <button class="bg-blue-600 hover:bg-blue-700 text-white text-base font-semibold py-3 px-32 rounded">
                            Berikutnya 
                        </button>
                    </router-link>
                </div>
            </section>
        </main>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
        info: null,
        open: false,
        }
    },
    mounted() {
        document.title = 'Faktur Gaji | SmartActors';
        axios
            .get('https://boss.smartlink.id/salary/inquiry')
            .then(response => (this.info = response.data.data))
    }
};


</script>

<style src="../assets/tailwind.css">