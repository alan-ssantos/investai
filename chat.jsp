<div class="row justify-content-md-center">
    <div class="col-md-8 col-lg-8 col-xl-6">
        <div class="chat-body" id="chat-body">
            <c:forEach items="${conversa }" var="dialogo">
                ${dialogo }
            </c:forEach>
            <!-- AS MENSAGENS DO CHAT VÃO AQUI DENTRO -->
        </div>
        <div class="chat-footer">
            <form action="TestWatson" method="post">
                <%-- <input type="text" id="chatInput" name="pergunta"><input id="idSubmit" type="submit"> --%>
                <input type="text" id="chatInput" name="pergunta" placeholder="Digite uma mensagem..." onkeypress="return newEvent(event)" />
                <button type="submit" name="button" class="send-btn"></button>
            </form>
        </div>
    </div>
</div>