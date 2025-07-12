<script setup>
</script>

<template>
    <div class="layout-summary-container">
        <div class="layout-summary">
            <div class="summary-title">
                <span class="line-zero">What we do</span>
            </div>
            <div class="summary-contents">
                <span class="line">We specialize in creating custom web platforms that elevate brand identity. From startups to large enterprises, we collaborate with clients and experts to craft exceptional digital experiences.&nbsp</span>
                <span class="line">By leveraging cutting-edge technology and intuitive design, we deliver solutions that drive business growth. Our focus is on creating sustainable, user-centered platforms that reflect the latest trends and maximize value.&nbsp</span>
                <span class="line">We build digital spaces that truly represent our clients' vision and goals.</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
@keyframes slideUp {
    0% {
        transform: translateY(50px);
        opacity: 0;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
}

.layout-summary-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 28rem;
    width: 100%;
    padding: 3rem 10rem;
    background-color: #f2f2f2;
    color: #515151;

    .layout-summary {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        animation: slideUp 0.8s ease-out;
        z-index: 1;

        .summary-title {
            display: flex;
            flex-direction: column;
            justify-content: center;
            font-family: PoppinsSemiBold;
            font-size: 1.7rem;
        }

        .line-zero {
            margin-bottom: 2rem;
        }

        .summary-contents {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-size: 1rem;
        }

        .summary-contents > span {
            display: block;
            
        }

        .line {
            width: 100%;
            margin-bottom: 2rem;
        }
    }

    
}


@media (max-width: 1024px) {
    .layout-summary-container {
        height: 33rem;
        padding: 3.5rem 3.5rem;


        .layout-summary {
            width: 100%;

            .summary-title {
                font-size: 2.1rem;
            }
            
            .line {
                margin-bottom: 1.8rem;
            }
        }     
    }
}


@media (max-width: 450px) {
    .layout-summary-container {
        height: 38rem;
        padding: 1.5rem 1.2rem;

        .layout-summary {
            .summary-title {
                justify-content: start;
            }

            .line-zero {
                margin-bottom: 1rem;
            }

            .summary-title {
                font-size: 1.4rem;
            }
            
            .summary-contents {
                font-size: 1rem;
            }
        }
    }
}

@media (max-width: 300px) {
    .layout-summary-container {
        height: 45rem;
    }
}

@media (max-width: 200px) {
    .layout-summary-container {
        height: 55rem;
    }
}


@media (max-width: 180px) {
    .layout-summary-container {
        height: 60rem;
    }
}


</style>