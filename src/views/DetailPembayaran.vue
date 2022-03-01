<template lang="">
    <main>
        <nav class="sticky top-0 w-full p-2 shadow-sm">
            <router-link to='/mainpage'>
                <button>
                    <img src="../assets/backicon.svg" alt="" class="inline-block">
                </button>
            </router-link>            
            <div class="inline-block pl-24">
                <p class="font-bold text-base text-center pl-2">Detail Pembayaran</p>
            </div>
        </nav>
        <section>
            <div id="subtotal_gaji" class="border-t-2">
                <dl class="container items-center flex justify-between m-2">
                    <!-- Property name -->
                    <dt class="text-sm pl-4">Subtotal Gaji</dt>

                    <!-- Property value -->
                    <dd class="text-base font-semibold pr-8">Rp 2.524.000</dd>
                </dl>
            </div>
            <div id="subtotal_upah" class="">
                <dl class="container items-center flex justify-between m-2">
                    <!-- Property name -->
                    <dt class="text-sm pl-4">Subtotal Upah</dt>

                    <!-- Property value -->
                    <dd class="text-base font-semibold pr-8">Rp 100.000</dd>
                </dl>
            </div>
            <div id="subtotal_komisi" class="">
                <dl class="container items-center flex justify-between m-2">
                    <!-- Property name -->
                    <dt class="text-sm pl-4">Subtotal Komisi</dt>

                    <!-- Property value -->
                    <dd class="text-base font-semibold pr-8">Rp 200.000</dd>
                </dl>
            </div>
            <div id="gaji_kotor" class="">
                <dl class="container items-center flex justify-between m-2 p-4">
                    <!-- Property name -->
                    <dt class="text-base">Gaji Kotor</dt>

                    <!-- Property value -->
                    <dd class="text-base font-semibold pr-4 text-green-600">Rp 2.824.000</dd>
                </dl>
            </div>
            <div id="tanggungan" class="border-b-2 border-dashed">
                <dl class="container items-center flex justify-between m-2 p-2">
                    <!-- Property name -->
                    <dt class="text-base text-red-600 pl-2">Tanggungan</dt>

                    <!-- Property value -->
                    <dd class="text-base font-semibold pr-6 text-red-600">(-) Rp 70.000</dd>
                </dl>
            </div>
            <div id="total_gaji_bersih" class="border-b-8">
                <dl class="container items-center flex justify-between m-2 p-4">
                    <!-- Property name -->
                    <dt class="text-base font-extrabold text-blue-600">Total Gaji Bersih</dt>

                    <!-- Property value -->
                    <dd class="text-base font-extrabold pr-4 text-blue-600">Rp 2.124.000</dd>
                </dl>
            </div>
        </section>
        <section class="border-t-8">
            <form action="">
                <div class="m-6 pt-4">
                    <div class="">
                        <p class="text-sm text-gray-500">Bayar dari Rekening*</p>
                            <select name="rekening" id="" class="block text-base w-full border border-gray-200 hover:border-gray-300 px-4 py-3 pr-8 rounded leading-normal focus:outline-none ">
                                <label for=""></label>
                                <option value="">Pilih Rekening Bank</option>
                            </select>
                    </div>
                </div>
                <div class="m-6">
                    <div class="">
                        <p class="text-sm text-gray-500">Dicatat Pada Tanggal*</p>
                            <input type="date" class="block text-base w-full border border-gray-200 hover:border-gray-300 px-4 py-3 rounded leading-normal focus:outline-none">
                    </div>
                </div>
                <div class="m-6">
                    <div class="">
                        <p class="text-sm text-gray-500">Keterangan</p>
                            <input type="text" class="block text-base w-full border border-gray-200 hover:border-gray-300 px-4 py-3 pr-8 rounded leading-normal focus:outline-none">
                    </div>
                </div>
            </form>
        </section>
        <div class="flex justify-center pt-10">
            <router-link to='/detail'>
                <button class="bg-blue-600 hover:bg-blue-700 text-white text-base font-semibold py-3 px-32 rounded">
                    Submit Gaji 
                </button>
            </router-link>
        </div>
    </main>
</template>


<script>
export default {
    
}
</script>

<style src="../assets/tailwind.css">