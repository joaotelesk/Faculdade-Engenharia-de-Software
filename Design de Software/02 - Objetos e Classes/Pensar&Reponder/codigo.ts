import { randomUUID } from 'node:crypto'

export class Usuario {
  private _cpf: string
  private _nome: string
  private _email: string
  private _matricula?: string
  private _tipo: string
  constructor(
    cpf: string,
    nome: string,
    email: string,
    tipo: 'cliente' | 'funcionario',
  ) {
    this._cpf = cpf
    this._nome = nome
    this._email = email
    this._matricula = tipo !== 'cliente' ? randomUUID() : undefined
    this._tipo = tipo
  }

  get cpf(): string {
    return this._cpf
  }

  set cpf(value: string) {
    this._cpf = value
  }

  get nome(): string {
    return this._nome
  }

  set nome(value: string) {
    this._nome = value
  }

  get email(): string {
    return this._email
  }

  set email(value: string) {
    this._email = value
  }

  get matricula(): string {
    if (!this._matricula) {
      throw new Error('usuario do tipo cliente não tem matricula')
    }
    return this._matricula
  }

  get tipo(): string {
    return this._tipo
  }

  set tipo(value: 'cliente' | 'funcionario') {
    if (value === 'cliente' && !this._matricula) {
      this._matricula = undefined
      this._tipo = value
      return
    }

    this._tipo = value
    this._matricula = randomUUID()
  }
}

export class Processo {
  private _protocolo: string
  private _autor: Usuario
  private _titulo: string
  private _dataProducao: Date
  private _dataAnalise?: Date
  private _matriculaAnalista?: string
  private _status?: 'deferido' | 'indeferido'

  constructor(autor: Usuario, titulo: string) {
    this._protocolo = randomUUID()
    this._autor = autor
    this._titulo = titulo
    this._dataProducao = new Date()
  }

  get protocolo(): string {
    return this._protocolo
  }

  get autor(): Usuario {
    return this._autor
  }

  get titulo(): string {
    return this._titulo
  }

  get dataProducao(): Date {
    return this._dataProducao
  }

  get dataAnalise(): Date | undefined {
    return this._dataAnalise
  }

  private set dataAnalise(value: Date | undefined) {
    this._dataAnalise = value
  }

  get matriculaAnalista(): string | undefined {
    return this._matriculaAnalista
  }

  set matriculaAnalista(value: string | undefined) {
    this._matriculaAnalista = value
  }

  get status(): 'deferido' | 'indeferido' | undefined {
    return this._status
  }

  private set status(value: 'deferido' | 'indeferido' | undefined) {
    this._status = value
  }

  public setAnalise({
    matriculaUsuario,
    status,
  }: {
    matriculaUsuario: string
    status: 'deferido' | 'indeferido'
  }): void {
    if (this.matriculaAnalista !== matriculaUsuario) {
      throw new Error('matricula do analista incorreta')
    }
    if (this._status === 'deferido') {
      throw new Error('processo já foi marcado como deferido')
    }
    this.status = status
    this.dataAnalise = new Date()
  }
}

export class Certificado {
  private _protocolo: string
  private _dataEmissao: Date
  private _emitidoEmCasa: boolean
  private _matriculaAnalista?: string

  constructor(
    protocolo: string,
    emitidoEmCasa: boolean,
    matriculaAnalista?: string,
  ) {
    this._protocolo = protocolo
    this._dataEmissao = new Date()
    this._emitidoEmCasa = emitidoEmCasa
    this._matriculaAnalista = matriculaAnalista
  }

  get protocolo(): string {
    return this._protocolo
  }

  get dataEmissao(): Date {
    return this._dataEmissao
  }

  get emitidoEmCasa(): boolean {
    return this._emitidoEmCasa
  }

  get matriculaAnalista(): string | undefined {
    return this._matriculaAnalista
  }
}
