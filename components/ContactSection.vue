<script setup>
</script>

<template>
    <div class="layout-contact-container">
        <div class="layout-contact">
            <div class="contact-title">
                <span class="line-zero">Get in Touch</span>
            </div>
            <div class="contact-contents">
                <span class="line"><a href="mailto:contact@rhenee.com">contact@rhenee.com</a></span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.layout-contact-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 20rem;
    width: 100%;
    padding: 3rem 10rem;
    background-color: #f2f2f2;
    color: #515151;
    font-family: "Lucida Grande";

    .layout-contact {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        z-index: 1;
        padding: 0 8rem;

        .contact-title {
            display: flex;
            flex-direction: row;
            justify-content: center;
            font-family: PoppinsSemiBold;
            font-size: 2rem;
        }

        .contact-title > span {
            display: block;
        }
        
        .line-zero {
            margin-bottom: 1.5rem;
        }

        .contact-contents {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-size: 1.2rem;
        }

        .contact-contents > span {
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
    .layout-contact-container {
        padding: 3.5rem 3.5rem;

        .layout-contact {
            width: 100%;
            padding: 0;

            .contact-title {
                font-size: 2.1rem;
            }
            
            .line {
                margin-bottom: 1.8rem;
            }
        }     
    }
}


@media (max-width: 450px) {
    .layout-contact-container {
        height: 24rem;
        padding: 1.5rem 1.2rem;

        .layout-contact {
            .line-zero {
                margin-bottom: 1rem;
            }

            .contact-title {
                font-size: 1.8rem;
            }
            
            .contact-contents {
                font-size: 1.2rem;
            }
        }
    }
}

@media (max-width: 300px) {
    .layout-contact-container {
        height: 22rem;
    }
}

@media (max-width: 200px) {
    .layout-contact-container {
        height: 20rem;
    }
}


@media (max-width: 180px) {
    .layout-contact-container {
        height: 22rem;
    }
}


</style>