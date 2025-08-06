import { FastifyInstance } from "fastify";

export type DefineRoutesHandler = (app: FastifyInstance) => void;
