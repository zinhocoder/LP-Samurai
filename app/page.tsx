"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  CheckCircle,
  Brain,
  FileText,
  Globe,
  Building,
  MessageSquare,
  ClipboardList,
  Users,
  Target,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef } from "react"

const CHECKOUT_URL = "https://checkout4.xgrow.com/pt/0a9b95cf-4d4a-413b-a12e-84b463f101d9/ODg5ODA="

export default function AssessorSamuraiLanding() {
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll(".fade-in-element")
    elements.forEach((el) => observerRef.current?.observe(el))

    return () => observerRef.current?.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-black py-10 md:py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-yellow-900/20" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left space-y-8 lg:space-y-12 fade-in-element px-2 lg:px-4">
              <div className="mb-6 lg:mb-10">
                <Image
                  src="/images/logo-dourado.png"
                  alt="Carlos Kayoda - Estrategista Político"
                  width={300}
                  height={90}
                  className="mx-auto lg:mx-0 w-full max-w-[300px] lg:max-w-[500px] h-auto"
                />
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-yellow-400 mb-6 lg:mb-8 leading-tight lg:whitespace-nowrap">
                Assessor Samurai
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 lg:mb-12 leading-relaxed px-2 max-w-3xl mx-auto lg:mx-0">
                O único curso do Brasil que forma assessores parlamentares com{" "}
                <span className="text-yellow-400 font-semibold">mentalidade</span>,{" "}
                <span className="text-yellow-400 font-semibold">estratégia</span> e{" "}
                <span className="text-yellow-400 font-semibold">inteligência artificial</span>.
              </p>

              <div className="space-y-4 lg:space-y-6 mb-10 lg:mb-16">
                <div className="flex items-center justify-center lg:justify-start space-x-3">
                  <CheckCircle className="text-yellow-400 w-5 h-5 lg:w-6 lg:h-6 flex-shrink-0" />
                  <span className="text-base lg:text-lg">Acesso imediato</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start space-x-3">
                  <CheckCircle className="text-yellow-400 w-5 h-5 lg:w-6 lg:h-6 flex-shrink-0" />
                  <span className="text-base lg:text-lg">100% online</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start space-x-3">
                  <CheckCircle className="text-yellow-400 w-5 h-5 lg:w-6 lg:h-6 flex-shrink-0" />
                  <span className="text-base lg:text-lg">Com IA integrada</span>
                </div>
              </div>

              <div className="pt-6 lg:pt-8 pb-8 lg:pb-12">
                <Link href={CHECKOUT_URL} target="_blank">
                  <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-sm sm:text-base lg:text-lg px-6 sm:px-8 lg:px-12 py-6 lg:py-8 rounded-lg transform hover:scale-105 transition-all duration-300 shadow-2xl relative overflow-hidden group w-full sm:w-auto">
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                    <span className="relative z-10 text-center leading-tight">
                      QUERO ME TORNAR UM
                      <br className="sm:hidden" /> SAMURAI DO GABINETE
                    </span>
                  </Button>
                </Link>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end fade-in-element order-first lg:order-last">
              <div className="relative">
                <div className="absolute inset-0 bg-yellow-400/20 blur-3xl rounded-full" />
                <Image
                  src="/images/samurai.png"
                  alt="Samurai Dourado"
                  width={400}
                  height={460}
                  className="relative z-10 drop-shadow-2xl w-full max-w-[400px] lg:max-w-[700px] h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Para quem é o Assessor Samurai */}
      <section className="py-12 lg:py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-yellow-400 mb-10 lg:mb-16 fade-in-element">
            Para quem é o Assessor Samurai?
          </h2>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <Card className="bg-gray-800 border-yellow-400/30 hover:border-yellow-400 transition-all duration-300 fade-in-element">
              <CardContent className="p-6 lg:p-8">
                <div className="flex items-center mb-4 lg:mb-6">
                  <Users className="text-yellow-400 w-6 h-6 lg:w-8 lg:h-8 mr-3 lg:mr-4 flex-shrink-0" />
                  <h3 className="text-xl lg:text-2xl font-bold text-yellow-400">Para Vereadores</h3>
                </div>
                <p className="text-gray-300 text-base lg:text-lg leading-relaxed mb-4 lg:mb-6">
                  Cansado de assessores que não entendem a dinâmica política? Que não sabem redigir um documento
                  oficial? Que não conseguem acompanhar o ritmo do gabinete?
                </p>
                <p className="text-white font-semibold text-base lg:text-lg">
                  É hora de ter assessores com mentalidade samurai: disciplinados, estratégicos e eficientes.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-yellow-400/30 hover:border-yellow-400 transition-all duration-300 fade-in-element">
              <CardContent className="p-6 lg:p-8">
                <div className="flex items-center mb-4 lg:mb-6">
                  <Target className="text-yellow-400 w-6 h-6 lg:w-8 lg:h-8 mr-3 lg:mr-4 flex-shrink-0" />
                  <h3 className="text-xl lg:text-2xl font-bold text-yellow-400">Para Assessores</h3>
                </div>
                <p className="text-gray-300 text-base lg:text-lg leading-relaxed mb-4 lg:mb-6">
                  O mercado político está cada vez mais competitivo. Assessores despreparados estão sendo substituídos
                  por profissionais qualificados.
                </p>
                <p className="text-white font-semibold text-base lg:text-lg">
                  Evolua estrategicamente ou seja substituído. A escolha é sua.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* O que você vai aprender */}
      <section className="py-12 lg:py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-yellow-400 mb-10 lg:mb-16 fade-in-element">
            O que você vai aprender
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <Card className="bg-gray-900 border-yellow-400/30 hover:border-yellow-400 transition-all duration-300 transform hover:scale-105 fade-in-element">
              <CardContent className="p-6 lg:p-8 text-center">
                <Brain className="text-yellow-400 w-10 h-10 lg:w-12 lg:h-12 mx-auto mb-4 lg:mb-6" />
                <h3 className="text-lg lg:text-xl font-bold text-yellow-400 mb-3 lg:mb-4">A Mente Samurai</h3>
                <p className="text-gray-300 text-sm lg:text-base">
                  Desenvolva a mentalidade estratégica e disciplinada necessária para ser um assessor de elite.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-yellow-400/30 hover:border-yellow-400 transition-all duration-300 transform hover:scale-105 fade-in-element">
              <CardContent className="p-6 lg:p-8 text-center">
                <FileText className="text-yellow-400 w-10 h-10 lg:w-12 lg:h-12 mx-auto mb-4 lg:mb-6" />
                <h3 className="text-lg lg:text-xl font-bold text-yellow-400 mb-3 lg:mb-4">Bastidores e Documentos</h3>
                <p className="text-gray-300 text-sm lg:text-base">
                  Domine a arte da documentação oficial e os segredos dos bastidores políticos.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-yellow-400/30 hover:border-yellow-400 transition-all duration-300 transform hover:scale-105 fade-in-element">
              <CardContent className="p-6 lg:p-8 text-center">
                <Globe className="text-yellow-400 w-10 h-10 lg:w-12 lg:h-12 mx-auto mb-4 lg:mb-6" />
                <h3 className="text-lg lg:text-xl font-bold text-yellow-400 mb-3 lg:mb-4">
                  Presença Digital Estratégica
                </h3>
                <p className="text-gray-300 text-sm lg:text-base">
                  Construa e gerencie a presença digital do mandato com estratégia e eficiência.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-yellow-400/30 hover:border-yellow-400 transition-all duration-300 transform hover:scale-105 fade-in-element">
              <CardContent className="p-6 lg:p-8 text-center">
                <Building className="text-yellow-400 w-10 h-10 lg:w-12 lg:h-12 mx-auto mb-4 lg:mb-6" />
                <h3 className="text-lg lg:text-xl font-bold text-yellow-400 mb-3 lg:mb-4">
                  Funcionamento Interno do Gabinete
                </h3>
                <p className="text-gray-300 text-sm lg:text-base">
                  Entenda como funciona a máquina política por dentro e otimize processos.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-yellow-400/30 hover:border-yellow-400 transition-all duration-300 transform hover:scale-105 fade-in-element sm:col-span-2 lg:col-span-1">
              <CardContent className="p-6 lg:p-8 text-center">
                <MessageSquare className="text-yellow-400 w-10 h-10 lg:w-12 lg:h-12 mx-auto mb-4 lg:mb-6" />
                <h3 className="text-lg lg:text-xl font-bold text-yellow-400 mb-3 lg:mb-4">
                  Narrativa e Posicionamento
                </h3>
                <p className="text-gray-300 text-sm lg:text-base">
                  Aprenda a construir narrativas poderosas e posicionar estrategicamente o mandato.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Samurai IA */}
      <section className="py-12 lg:py-20 bg-gradient-to-r from-yellow-400 to-yellow-600">
        <div className="container mx-auto px-4">
          <div className="text-center text-black fade-in-element">
            <div className="w-12 h-12 lg:w-16 lg:h-16 mx-auto mb-6 lg:mb-8">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142-.0852 4.783-2.7582a.7712.7712 0 0 0 .7806 0l5.8428 3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"/>
              </svg>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 lg:mb-8">Samurai IA</h2>
            <p className="text-xl sm:text-2xl lg:text-3xl font-bold mb-8 lg:mb-12">
              Você digita o comando. Ela entrega.
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-4xl mx-auto">
              <div className="bg-black/10 backdrop-blur-sm rounded-lg p-4 lg:p-6">
                <FileText className="w-6 h-6 lg:w-8 lg:h-8 mx-auto mb-3 lg:mb-4" />
                <p className="font-semibold text-sm lg:text-base">Documentos Oficiais</p>
              </div>
              <div className="bg-black/10 backdrop-blur-sm rounded-lg p-4 lg:p-6">
                <MessageSquare className="w-6 h-6 lg:w-8 lg:h-8 mx-auto mb-3 lg:mb-4" />
                <p className="font-semibold text-sm lg:text-base">Discursos Impactantes</p>
              </div>
              <div className="bg-black/10 backdrop-blur-sm rounded-lg p-4 lg:p-6">
                <Brain className="w-6 h-6 lg:w-8 lg:h-8 mx-auto mb-3 lg:mb-4" />
                <p className="font-semibold text-sm lg:text-base">Estratégia Políticas</p>
              </div>
              <div className="bg-black/10 backdrop-blur-sm rounded-lg p-4 lg:p-6">
                <ClipboardList className="w-6 h-6 lg:w-8 lg:h-8 mx-auto mb-3 lg:mb-4" />
                <p className="font-semibold text-sm lg:text-base">Cronograma de postagens</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Materiais que você recebe */}
      <section className="py-12 lg:py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-yellow-400 mb-10 lg:mb-16 fade-in-element">
            Materiais que você recebe
          </h2>

          <div className="max-w-2xl mx-auto">
            <div className="space-y-4 lg:space-y-6 fade-in-element">
              <div className="flex items-center space-x-3 lg:space-x-4 bg-gray-800 p-4 lg:p-6 rounded-lg">
                <CheckCircle className="text-yellow-400 w-6 h-6 lg:w-8 lg:h-8 flex-shrink-0" />
                <span className="text-lg lg:text-xl">Apostilas completas e atualizadas</span>
              </div>
              <div className="flex items-center space-x-3 lg:space-x-4 bg-gray-800 p-4 lg:p-6 rounded-lg">
                <CheckCircle className="text-yellow-400 w-6 h-6 lg:w-8 lg:h-8 flex-shrink-0" />
                <span className="text-lg lg:text-xl">Modelos reais de documentos</span>
              </div>
              <div className="flex items-center space-x-3 lg:space-x-4 bg-gray-800 p-4 lg:p-6 rounded-lg">
                <CheckCircle className="text-yellow-400 w-6 h-6 lg:w-8 lg:h-8 flex-shrink-0" />
                <span className="text-lg lg:text-xl">Roteiros de conteúdo estratégico</span>
              </div>
              <div className="flex items-center space-x-3 lg:space-x-4 bg-gray-800 p-4 lg:p-6 rounded-lg">
                <CheckCircle className="text-yellow-400 w-6 h-6 lg:w-8 lg:h-8 flex-shrink-0" />
                <span className="text-lg lg:text-xl">Checklists práticos</span>
              </div>
              <div className="flex items-center space-x-3 lg:space-x-4 bg-gray-800 p-4 lg:p-6 rounded-lg">
                <CheckCircle className="text-yellow-400 w-6 h-6 lg:w-8 lg:h-8 flex-shrink-0" />
                <span className="text-lg lg:text-xl">Acesso exclusivo à IA Samurai</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Especialista */}
      <section className="pt-12 lg:pt-20 pb-0 bg-gradient-to-b from-black via-yellow-900/30 to-yellow-900/20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 via-yellow-400/15 to-yellow-400/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="fade-in-element order-2 lg:order-1">
              <Image
                src="/images/especialista.png"
                alt="Carlos Kayoda - Especialista"
                width={400}
                height={500}
                className="mx-auto w-full max-w-[300px] lg:max-w-[400px] h-auto"
              />
            </div>
            <div className="fade-in-element order-1 lg:order-2">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-400 mb-4 lg:mb-6 text-center lg:text-left">
                Quem é Carlos Kayoda?
              </h2>
              <p className="text-gray-300 text-base lg:text-lg leading-relaxed mb-4 lg:mb-6">
                Estrategista político com mais de uma década de experiência em gabinetes e campanhas eleitorais.
                Especialista em inteligência artificial aplicada à política e formação de assessores parlamentares de
                alto nível.
              </p>
              <p className="text-white font-semibold text-base lg:text-lg">
                Responsável por formar centenas de assessores que hoje ocupam posições estratégicas em gabinetes por
                todo o Brasil.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 lg:py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4 text-center">
          <div className="fade-in-element">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-yellow-400 mb-6 lg:mb-8 leading-tight">
              O Assessor Samurai já está transformando gabinetes em todo o país.
            </h2>
            <p className="text-xl sm:text-2xl lg:text-3xl text-white mb-10 lg:mb-16">Agora é a sua vez.</p>

            {/* Card de Oferta Principal */}
            <div className="max-w-4xl mx-auto mb-10 lg:mb-16">
              <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-yellow-400 border-2 shadow-2xl">
                <CardContent className="p-6 lg:p-12">
                  <div className="text-center mb-6 lg:mb-8">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-400 mb-3 lg:mb-4">
                      OFERTA ESPECIAL
                    </h3>
                    <div className="space-y-2 lg:space-y-3">
                      <div className="text-2xl sm:text-3xl lg:text-4xl text-gray-300">
                        12x de <span className="text-yellow-400 font-bold text-3xl sm:text-4xl lg:text-5xl">R$ 24,70</span>
                      </div>
                      <div className="text-lg lg:text-xl text-gray-400">ou</div>
                      <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">R$ 247,00</div>
                      <p className="text-lg lg:text-xl text-gray-300">à vista - Acesso imediato</p>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-4 lg:gap-6 mb-6 lg:mb-8">
                    <Card className="bg-black/50 border-yellow-400/30 hover:border-yellow-400 transition-all duration-300">
                      <CardContent className="p-4 lg:p-6 text-center">
                        <Brain className="text-yellow-400 w-8 h-8 lg:w-12 lg:h-12 mx-auto mb-3 lg:mb-4" />
                        <h4 className="text-base lg:text-lg font-bold text-yellow-400 mb-2">Mentalidade</h4>
                        <p className="text-gray-300 text-xs lg:text-sm">Desenvolva o mindset samurai</p>
                      </CardContent>
                    </Card>

                    <Card className="bg-black/50 border-yellow-400/30 hover:border-yellow-400 transition-all duration-300">
                      <CardContent className="p-4 lg:p-6 text-center">
                        <Target className="text-yellow-400 w-8 h-8 lg:w-12 lg:h-12 mx-auto mb-3 lg:mb-4" />
                        <h4 className="text-base lg:text-lg font-bold text-yellow-400 mb-2">Estratégia</h4>
                        <p className="text-gray-300 text-xs lg:text-sm">Domine táticas avançadas</p>
                      </CardContent>
                    </Card>

                    <Card className="bg-black/50 border-yellow-400/30 hover:border-yellow-400 transition-all duration-300 sm:col-span-3 lg:col-span-1">
                      <CardContent className="p-4 lg:p-6 text-center">
                        <div className="bg-yellow-400 text-black rounded-full w-10 h-10 lg:w-12 lg:h-12 mx-auto mb-3 lg:mb-4 font-bold text-base lg:text-lg">
                          3
                        </div>
                        <h4 className="text-base lg:text-xl font-bold text-yellow-400 mb-2 lg:mb-3">Suporte Direto</h4>
                        <p className="text-gray-300 text-sm lg:text-base">Suporte direto com o Carlos Kayoda</p>
                      </CardContent>
                    </Card>
                  </div>

                  <Link href={CHECKOUT_URL} target="_blank">
                    <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg sm:text-xl px-8 sm:px-12 lg:px-16 py-8 lg:py-12 rounded-lg transform hover:scale-105 transition-all duration-300 shadow-2xl relative overflow-hidden group w-full">
                      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                      <span className="relative z-10 leading-tight">
                        QUERO SER UM ASSESSOR
                        <br className="sm:hidden" /> SAMURAI AGORA
                      </span>
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>

            {/* Bônus em Cards */}
            <div className="mb-8 lg:mb-12">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-400 mb-6 lg:mb-8">
                BÔNUS EXCLUSIVOS
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 max-w-6xl mx-auto">
                <Card className="bg-gradient-to-br from-yellow-900/20 to-black border-yellow-400/50 hover:border-yellow-400 transition-all duration-300 transform hover:scale-105">
                  <CardContent className="p-4 lg:p-6 text-center">
                    <div className="bg-yellow-400 text-black rounded-full w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center mx-auto mb-3 lg:mb-4 font-bold text-base lg:text-lg">
                      1
                    </div>
                    <h4 className="text-lg lg:text-xl font-bold text-yellow-400 mb-2 lg:mb-3">Templates Exclusivos</h4>
                    <p className="text-gray-300 text-sm lg:text-base">Modelos prontos de documentos oficiais</p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-yellow-900/20 to-black border-yellow-400/50 hover:border-yellow-400 transition-all duration-300 transform hover:scale-105">
                  <CardContent className="p-4 lg:p-6 text-center">
                    <div className="bg-yellow-400 text-black rounded-full w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center mx-auto mb-3 lg:mb-4 font-bold text-base lg:text-lg">
                      2
                    </div>
                    <h4 className="text-lg lg:text-xl font-bold text-yellow-400 mb-2 lg:mb-3">Grupo VIP</h4>
                    <p className="text-gray-300 text-sm lg:text-base">Acesso ao grupo exclusivo de alunos</p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-yellow-900/20 to-black border-yellow-400/50 hover:border-yellow-400 transition-all duration-300 transform hover:scale-105 sm:col-span-2 lg:col-span-1">
                  <CardContent className="p-4 lg:p-6 text-center">
                    <div className="bg-yellow-400 text-black rounded-full w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center mx-auto mb-3 lg:mb-4 font-bold text-base lg:text-lg">
                      3
                    </div>
                    <h4 className="text-lg lg:text-xl font-bold text-yellow-400 mb-2 lg:mb-3">Suporte Direto</h4>
                    <p className="text-gray-300 text-sm lg:text-base">Suporte direto com o Carlos Kayoda</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

     {/* Seção de Urgência e Garantia */}
<div className="mt-12 sm:mt-14 lg:mt-20 px-4 sm:px-6">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-6xl mx-auto">
    {/* Urgência */}
    <Card className="bg-gradient-to-br from-red-900/30 to-black border-red-400/50 hover:border-red-400 transition-all duration-300">
      <CardContent className="p-5 sm:p-6 lg:p-8 text-center">
        <div className="bg-red-500 text-white rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4 font-bold text-lg sm:text-xl">
          ⚠️
        </div>
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-red-400 mb-3 sm:mb-4">ATENÇÃO: VAGAS LIMITADAS</h3>
        <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6">
          Para garantir a qualidade do ensino e suporte personalizado, limitamos o acesso a apenas
          <span className="text-red-400 font-bold"> 100 alunos por turma</span>.
        </p>
        <p className="text-white font-semibold text-base sm:text-lg">Não perca sua vaga. O mercado não espera.</p>
      </CardContent>
    </Card>

    {/* Garantia */}
    <Card className="bg-gradient-to-br from-green-900/30 to-black border-green-400/50 hover:border-green-400 transition-all duration-300">
      <CardContent className="p-5 sm:p-6 lg:p-8 text-center">
        <div className="bg-green-500 text-white rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4 font-bold text-lg sm:text-xl">
          ✓
        </div>
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-green-400 mb-3 sm:mb-4">GARANTIA BLINDADA</h3>
        <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6">
          <span className="text-green-400 font-bold">7 dias de garantia incondicional</span>. Se não ficar
          satisfeito, devolvemos 100% do seu investimento.
        </p>
        <p className="text-white font-semibold text-base sm:text-lg">Sem perguntas. Sem burocracia.</p>
      </CardContent>
    </Card>
  </div>

  {/* Resultados */}
  <div className="mt-10 sm:mt-12 lg:mt-16">
    <Card className="bg-gradient-to-br from-yellow-900/20 to-black border-yellow-400 border-2">
      <CardContent className="p-6 sm:p-8 lg:p-12 text-center">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-400 mb-6 sm:mb-8">RESULTADOS COMPROVADOS</h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-yellow-400 mb-1 sm:mb-2">500+</div>
            <p className="text-gray-300 text-sm sm:text-base lg:text-lg">Assessores Formados</p>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-yellow-400 mb-1 sm:mb-2">95%</div>
            <p className="text-gray-300 text-sm sm:text-base lg:text-lg">Taxa de Aprovação</p>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-yellow-400 mb-1 sm:mb-2">200+</div>
            <p className="text-gray-300 text-sm sm:text-base lg:text-lg">Gabinetes Atendidos</p>
          </div>
        </div>

        <p className="text-lg sm:text-xl lg:text-2xl text-white mb-6 sm:mb-8 leading-relaxed">
          "Nossos alunos não apenas conseguem vagas, eles se tornam
          <span className="text-yellow-400 font-bold"> referência em seus gabinetes</span>."
        </p>

        {/* BOTÃO COM AJUSTE RESPONSIVO */}
        <div className="w-full flex lg:justify-center">
          <Link href={CHECKOUT_URL} target="_blank" className="w-full sm:w-auto">
            <Button className="w-full sm:w-auto bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-bold text-base sm:text-xl lg:text-2xl px-4 sm:px-8 lg:px-20 py-5 sm:py-8 lg:py-12 rounded-lg transform hover:scale-105 transition-all duration-300 shadow-2xl relative overflow-hidden group">
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
              <span className="relative z-10 leading-tight text-center">
                GARANTIR MINHA VAGA AGORA
              </span>
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  </div>

  {/* CTA Final de Urgência */}
  <div className="mt-10 sm:mt-12 lg:mt-16 text-center">
    <div className="bg-gradient-to-r from-black via-red-900/20 to-black p-6 sm:p-8 lg:p-12 rounded-lg border border-red-400/30">
      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-red-400 mb-3 sm:mb-4">⏰ ÚLTIMAS VAGAS DISPONÍVEIS</h3>
      <p className="text-lg sm:text-xl lg:text-2xl text-white mb-4 sm:mb-6">Não seja mais um assessor comum perdido no gabinete.</p>
      <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8">
        Torne-se um <span className="text-yellow-400 font-bold">Samurai</span> e domine sua carreira política.
      </p>

      <Link href={CHECKOUT_URL} target="_blank">
        <Button className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-bold text-base sm:text-lg lg:text-xl px-6 sm:px-10 lg:px-16 py-5 sm:py-6 lg:py-8 rounded-lg transform hover:scale-105 transition-all duration-300 shadow-2xl relative overflow-hidden group">
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
          <span className="relative z-10">SIM, QUERO SER UM SAMURAI!</span>
        </Button>
      </Link>
    </div>

    {/* Rodapé */}
<div className="mt-12 lg:mt-16 text-center text-sm text-gray-400 pb-8">
  <p className="mb-2">&copy; {new Date().getFullYear()} Todos os direitos reservados.</p>
  <p>
    Desenvolvido por{" "}
    <a
      href="https://www.devpro.fun"
      target="_blank"
      rel="noopener noreferrer"
      className="text-yellow-400 font-semibold hover:underline"
    >
      DevPro
    </a>
  </p>
</div>
  </div>
</div>
    </div>
  )
}
