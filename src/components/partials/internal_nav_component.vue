<template>
    <div class="internal-navigation">
        <ul>
            <li>Yer ma'lumoti</li>
            <li>Yer tayyorlash</li>
            <li>Ekin ekish</li>
            <li>Agrotexnik tadbirlar</li>
            <li>Texnika</li>
            <li>Klaster</li>
            <li>Investitsiya</li>
        </ul>
    </div>
</template>
  
<script>
export default {
    name: "intergnal_nav_component",
    props: [],
        mounted() {
            $('.internal-navigation ul li').click((e) => {
                $('.internal-navigation ul li').removeClass('active');
                $(e.target).toggleClass('active');
            })
    }
}
</script>

<style scoped>
.internal-navigation {
    width: 100%;
    height: 100%;
    background: #FFFFFF;
    box-shadow: 6px 0px 14px rgba(0, 0, 0, 0.08);
    border-radius: 12px;
    padding: 2% 1.5% 0% 1.5%;
}
.internal-navigation ul {
    gap: 1%;
    width: 100%;
    height: 100%;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 1.1rem;
    display: inline-flex;
    justify-content: flex-start;
    text-decoration: none;
    list-style: none;
    border-bottom: thin solid #DFDFE0;
}
.internal-navigation ul li {
    cursor: not-allowed;
    padding: 0 1%;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 1vw;
    border-bottom: 2px solid transparent;
    transition: all 0.2s ease;
}

.internal-navigation ul li:hover {
    color: #08705F;
    border-bottom: 2px solid #08705F;
    transition: all 0.2s ease;
}

.internal-navigation ul li.active {
    color: #08705F;
    border-bottom: 2px solid #08705F;
    transition: all 0.2s ease;
}
</style>