<script lang="ts">

</script>
<nav>
    <div>
        <ul>
            <li><img id="myPrintLogo" src="MyPrint-noback.png" alt="MyPrint Logo" style="width:128px;height:128px;"></li>
            <li><a href="./">Home</a></li>
            <li><a href="./tickets">Tickets</a></li>
            <li><a href="./newTicket">New Ticket</a></li>
            <li><a href="./webcam">Webcam</a></li>
            <li><a href="/">OctoPrint</a></li>
        </ul>
    </div>
</nav>

<style>
    div{
        overflow-y: scroll;
        height: 100vh;
    }
    nav{
        float: left;
        /* background: rgb(42, 70, 102); */
        background: rgb(41, 41, 41);
        min-width: 150px;
        /* width: 10%; */
        height: 100%;
        min-height: 100vh;
        overflow: scroll;
        overflow-y: scroll;
    }
    li{
        left: 0;
        color: white;
        list-style:none ;
        padding: 10px;
        font-size: x-large;
        margin: 50px 0;
        /* outline: 2px solid gray; */
        /* background: rgb(50, 50, 50); */
        width: fit-content;
        display: block;
        word-wrap: normal;
    }
    ul{
        list-style-type: none;
        margin: 0;
        margin-left: 10px;
        padding: 0;
    }
    li > a{
        color: white;
    }

</style>