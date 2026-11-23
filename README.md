# Convite interativo — Isadora | XV anos

**Evento:** 19/12/2026, às 21h  
**Hospedagem:** GitHub Pages (HTML/CSS/JavaScript estático)  
**Formato das artes:** WebP, em composição vertical 9:16. O cartão Info está em 3:4.

## O que foi reaproveitado do ZIP enviado

O ZIP recebido foi `Convite-Lili-XV-anos-main.zip`. Seu `index.html`, editor de zonas clicáveis `?editor=1` e o arquivo `assets/musica.mp3` serviram como base. O áudio foi mantido **exatamente** como estava; confira se ele é o desejado para a Isadora. As imagens e os dados da Lili foram substituídos.

## Arquivos

- `index.html` — abertura, página principal, páginas internas, Info e controles.
- `config.js` — informações, links, ativação de vídeo e posições clicáveis.
- `assets/opening.webp` — carta fechada com fundo do mar.
- `assets/principal.webp` — Isadora, 19/12/2026, 21h, cinco botões e Info.
- `assets/presentes.webp` — sugestões em cinco categorias, contraste azul-marinho.
- `assets/manual.webp` — manual com quatro orientações.
- `assets/dresscode.webp` — esporte fino e aviso de evitar tons de verde.
- `assets/info.webp` — pop-up do criador, sem moldura, proporção 3:4.
- `assets/preview-whatsapp.webp` — prévia horizontal em WebP (1200 × 630 px).
- `assets/preview-whatsapp.jpg` — cópia **JPEG necessária apenas para compatibilidade da prévia do WhatsApp** (1200 × 630 px). As imagens visíveis do convite são todas WebP.
- `assets/musica.mp3` — áudio original do ZIP, mantido sem alteração.

## PENDÊNCIAS antes de disponibilizar aos convidados

Edite `config.js` e preencha:

1. `whatsapp.numero` — **não informado** para a Isadora. O botão já tem área clicável; até configurar, mostra um aviso em vez de chamar outra cliente.
2. `mapa` — **link real do local não informado**. O botão já tem área clicável; até configurar, mostra um aviso.
3. `contatoCriador.numero` — o contato de **Pedro Vieira** foi trazido do ZIP original para o pop-up Info. Confirme o telefone antes de publicar.
4. A arte de presentes inclui a alternativa "Dinheiro ou Pix", porém **nenhuma chave Pix foi fornecida**. Não existe botão de copiar chave nessa arte, e `pix.ativo` ficou `false`.
5. Os metadados para a prévia do WhatsApp em `index.html` contêm `https://SEU-USUARIO.github.io/SEU-REPOSITORIO/`. **Substitua todas as ocorrências pela URL real do site** (com barra final). A prévia social exige URL absoluta e domínio público; não basta alterar `config.js`.

## Publicação no GitHub Pages

1. Crie um repositório (por exemplo, `Convite-Isadora-XV-anos`).
2. Envie o **conteúdo da pasta** (`index.html`, `config.js`, `assets/`) à raiz do repositório. Não envie só o ZIP.
3. Em **Settings → Pages**, escolha **Deploy from a branch**, branch `main`, pasta `/(root)` e salve.
4. Quando a URL estiver definida, substitua as URLs de exemplo nas tags `og:url`, `og:image` e `twitter:image` em `index.html` pela URL real e atualize o GitHub.
5. Confira em celular: abertura → principal → presentes/dress code/manual → voltar; Info → Mais informações → X; localização e confirmação após preencher os links.

### Editor de áreas de clique

Adicione `?editor=1` ao final da URL do convite (por exemplo, `https://usuario.github.io/repositorio/?editor=1`). As áreas de clique da página principal, subpáginas e Info ficam editáveis. No editor, use "Copiar código" e atualize `config.js` com as posições finais. Salvar no navegador **não altera automaticamente o GitHub**.

### Vídeo da carta (pronto para adicionar posteriormente)

- No pacote atual, `telas.video` é `false`: ao tocar na carta, abre a página principal e a música é iniciada mediante interação.
- Crie a animação a partir de `assets/opening.webp`, em vertical 9:16, e exporte como **H.264 MP4**.
- Salve o arquivo no projeto como `assets/video.mp4` e mude `telas.video` para `true` em `config.js`. O player original já está ligado ao fluxo de abertura, com botão Pular vídeo e retorno à página principal ao terminar.
- Mantenha o MP4 sem áudio caso queira que a música existente continue durante a transição.
- Enquanto o MP4 ainda não existir, **não ative** `telas.video`.

## Cuidados

- As zonas clicáveis ficam transparentes sobre a arte WebP. A imagem sozinha não é um site interativo.
- Não compartilhe com os convidados até preencher o WhatsApp e localização corretos.
- O pacote não foi publicado automaticamente nem cria repositório GitHub.
