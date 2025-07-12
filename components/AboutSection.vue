<script setup>
</script>

<template>
    <div class="layout-about-container">
        <div class="layout-about">
            <div class="about-title">
                <span class="line-zero">A versatile digital solutions studio.</span>
            </div>
            <div class="about-contents">
                <span class="line">We help clients shape online experiences that connect with their audience and reflect their brand.&nbsp</span>
                <span class="line">And bring your vision to the world.</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.layout-about-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 24rem;
    width: 100%;
    padding: 3rem 10rem;
    color: #515151;
    font-family: "Lucida Grande";

    .layout-about {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        z-index: 1;
        padding: 0 8rem;

        .about-title {
            display: flex;
            flex-direction: row;
            justify-content: center;
            font-family: PoppinsSemiBold;
            font-size: 2rem;
        }

        .about-title > span {
            display: block;
        }
        
        .line-zero {
            margin-bottom: 1.5rem;
        }

        .about-contents {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-size: 1.2rem;
        }

        .about-contents > span {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .line {
            width: 100%;
            margin-bottom: 1rem;
        }
    }

    
}


@media (max-width: 1024px) {
    .layout-about-container {
        height: 28rem;
        padding: 3.5rem 3.5rem;

        .layout-about {
            width: 100%;
            padding: 0;

            .about-title {
                font-size: 2.1rem;
            }
            
            .line {
                margin-bottom: 1.8rem;
            }
        }     
    }
}


@media (max-width: 450px) {
    .layout-about-container {
        height: 32rem;
        padding: 1.5rem 1.2rem;

        .layout-about {
            .line-zero {
                margin-bottom: 1rem;
            }

            .about-title {
                font-size: 1.8rem;
            }
            
            .about-contents {
                font-size: 1.2rem;
            }
        }
    }
}

@media (max-width: 300px) {
    .layout-about-container {
        height: 32rem;
    }
}

@media (max-width: 200px) {
    .layout-about-container {
        height: 40rem;
    }
}


@media (max-width: 180px) {
    .layout-about-container {
        height: 45rem;
    }
}


</style>