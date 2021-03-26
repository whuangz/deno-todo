FROM hayd/alpine-deno:1.8.2
RUN deno install --allow-read --allow-run --allow-write --allow-net -f -q --unstable https://deno.land/x/denon@2.4.7/denon.ts

WORKDIR /usr/app

COPY deps.ts .
RUN deno cache deps.ts

ADD . .
CMD ["denon","start"]
