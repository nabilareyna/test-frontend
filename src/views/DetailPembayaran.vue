<template lang="">
    <main>
        <nav class="sticky top-0 w-full p-2 shadow-sm">
            <router-link to='/mainpage'>
                <button>
                    <img src="../assets/backicon.svg" alt="" class="inline-block">
                </button>
            </router-link>            
            <div class="inline-block pl-20">
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
            <div id="total_gaji_bersih" class="">
                <dl class="container items-center flex justify-between m-2 p-4">
                    <!-- Property name -->
                    <dt class="text-base font-extrabold text-blue-600">Total Gaji Bersih</dt>

                    <!-- Property value -->
                    <dd class="text-base font-extrabold pr-4 text-blue-600">Rp 2.124.000</dd>
                </dl>
            </div>
        </section>
    </main>
</template>


<script>
export default {
    
}
</script>

<style src="../assets/tailwind.css">