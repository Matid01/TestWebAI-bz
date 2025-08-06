export interface SubProject {
  proyecto: string
  estado: string
  progreso: number
  responsable: string
  prioridad: string
  grupo: string
  tecnologia: string
  fechaInicio: string
  fechaFin: string
  observaciones: string
}

export interface ProjectGroup {
  id: string
  name: string
  description: string
  color: string
  projects: SubProject[]
}

export interface MainProject {
  id: string
  name: string
  description: string
  color: string
  icon: string
  totalSubProjects: number
  completedSubProjects: number
  avgProgress: number
  groups: ProjectGroup[]
}

// 4 Proyectos principales (páginas del CSV)
export const mainProjectsData: MainProject[] = [
  {
    id: 'proyecto-legales',
    name: 'Proyecto Legales',
    description: 'Sistema integral de agentes IA para procesos legales, autenticación y gestión documental',
    color: 'emerald',
    icon: 'Shield',
    totalSubProjects: 11,
    completedSubProjects: 3,
    avgProgress: 58,
    groups: [
      {
        id: 'autenticacion',
        name: 'Autenticación',
        description: 'Sistema de autenticación y acceso',
        color: 'emerald',
        projects: [
          {
            proyecto: 'Login PJN',
            estado: 'Completado',
            progreso: 100,
            responsable: 'Equipo Autenticación',
            fechaInicio: '01/11/2023',
            fechaFin: '15/12/2023',
            prioridad: 'Alta',
            grupo: 'Autenticación',
            tecnologia: 'React/Node.js',
            observaciones: 'Sistema de login integrado con PJN funcionando correctamente'
          }
        ]
      },
      {
        id: 'procesamiento-documentos',
        name: 'Procesamiento de Documentos',
        description: 'Clasificación, embargos y gestión documental',
        color: 'blue',
        projects: [
          {
            proyecto: 'Clasificador de Documentos',
            estado: 'En Desarrollo',
            progreso: 85,
            responsable: 'Equipo ML',
            fechaInicio: '15/01/2024',
            fechaFin: '28/02/2024',
            prioridad: 'Alta',
            grupo: 'Procesamiento de Documentos',
            tecnologia: 'Python/TensorFlow',
            observaciones: 'Modelo de clasificación con 95% de precisión'
          },
          {
            proyecto: 'Calificador de Embargos',
            estado: 'En Desarrollo',
            progreso: 70,
            responsable: 'Equipo Legal-IA',
            fechaInicio: '01/02/2024',
            fechaFin: '15/03/2024',
            prioridad: 'Alta',
            grupo: 'Procesamiento de Documentos',
            tecnologia: 'Python/scikit-learn',
            observaciones: 'Algoritmo de calificación en fase de pruebas'
          },
          {
            proyecto: 'Planilla de Embargos',
            estado: 'En Desarrollo',
            progreso: 60,
            responsable: 'Equipo Backend',
            fechaInicio: '10/02/2024',
            fechaFin: '20/03/2024',
            prioridad: 'Media',
            grupo: 'Procesamiento de Documentos',
            tecnologia: 'Node.js/Express',
            observaciones: 'Generación automática de planillas implementada'
          },
          {
            proyecto: 'Descarga PDF',
            estado: 'Completado',
            progreso: 100,
            responsable: 'Equipo Frontend',
            fechaInicio: '05/01/2024',
            fechaFin: '25/01/2024',
            prioridad: 'Media',
            grupo: 'Procesamiento de Documentos',
            tecnologia: 'React/PDF.js',
            observaciones: 'Sistema de descarga optimizado y funcionando'
          },
          {
            proyecto: 'Subida PDF',
            estado: 'Completado',
            progreso: 100,
            responsable: 'Equipo Frontend',
            fechaInicio: '05/01/2024',
            fechaFin: '20/01/2024',
            prioridad: 'Media',
            grupo: 'Procesamiento de Documentos',
            tecnologia: 'React/Multer',
            observaciones: 'Upload con validación y procesamiento automático'
          },
          {
            proyecto: 'Correo de Alerta Embargos',
            estado: 'En Desarrollo',
            progreso: 45,
            responsable: 'Equipo Notificaciones',
            fechaInicio: '20/02/2024',
            fechaFin: '10/04/2024',
            prioridad: 'Media',
            grupo: 'Procesamiento de Documentos',
            tecnologia: 'Node.js/Nodemailer',
            observaciones: 'Sistema de alertas automáticas en desarrollo'
          },
          {
            proyecto: 'Agente Supervisor',
            estado: 'Planificación',
            progreso: 25,
            responsable: 'Equipo IA Avanzada',
            fechaInicio: '01/03/2024',
            fechaFin: '30/05/2024',
            prioridad: 'Alta',
            grupo: 'Procesamiento de Documentos',
            tecnologia: 'Python/OpenAI',
            observaciones: 'Agente de supervisión inteligente en diseño'
          }
        ]
      },
      {
        id: 'clasificacion-liquidaciones',
        name: 'Clasificación y Liquidaciones',
        description: 'Sistemas de clasificación avanzada y liquidaciones',
        color: 'purple',
        projects: [
          {
            proyecto: 'Clasificador de Documentos v2',
            estado: 'Planificación',
            progreso: 15,
            responsable: 'Equipo ML Avanzado',
            fechaInicio: '15/03/2024',
            fechaFin: '30/06/2024',
            prioridad: 'Media',
            grupo: 'Clasificación y Liquidaciones',
            tecnologia: 'Python/PyTorch',
            observaciones: 'Segunda versión del clasificador con mejoras'
          },
          {
            proyecto: 'Calificador de Liquidaciones',
            estado: 'Planificación',
            progreso: 10,
            responsable: 'Equipo Finanzas-IA',
            fechaInicio: '01/04/2024',
            fechaFin: '31/07/2024',
            prioridad: 'Alta',
            grupo: 'Clasificación y Liquidaciones',
            tecnologia: 'Python/Pandas',
            observaciones: 'Sistema de calificación de liquidaciones automático'
          },
          {
            proyecto: 'Proyecto Sin Nombre',
            estado: 'En Definición',
            progreso: 0,
            responsable: 'Por Asignar',
            fechaInicio: '',
            fechaFin: '',
            prioridad: 'Por Definir',
            grupo: 'Clasificación y Liquidaciones',
            tecnologia: 'Por Definir',
            observaciones: 'Proyecto en fase de definición de alcance y objetivos'
          }
        ]
      }
    ]
  },
  {
    id: 'proyecto-art',
    name: 'Proyecto ART',
    description: 'Sistema de gestión de riesgos del trabajo y prevención de accidentes laborales',
    color: 'blue',
    icon: 'FileText',
    totalSubProjects: 4,
    completedSubProjects: 0,
    avgProgress: 25,
    groups: [
      {
        id: 'grupo-1',
        name: 'Aplicación Principal',
        description: 'Aplicación principal del sistema ART',
        color: 'blue',
        projects: [
          {
            proyecto: 'App ART',
            estado: 'En Desarrollo',
            progreso: 45,
            responsable: 'Equipo ART-Mobile',
            fechaInicio: '01/02/2024',
            fechaFin: '30/05/2024',
            prioridad: 'Alta',
            grupo: 'Aplicación Principal',
            tecnologia: 'React Native/Node.js',
            observaciones: 'Aplicación móvil principal para gestión de ART y riesgos laborales'
          }
        ]
      },
      {
        id: 'grupo-2',
        name: 'Integración y Usuarios',
        description: 'Sistemas de integración y gestión de usuarios ART',
        color: 'orange',
        projects: [
          {
            proyecto: 'ART WebHook',
            estado: 'En Desarrollo',
            progreso: 30,
            responsable: 'Equipo Backend-ART',
            fechaInicio: '15/02/2024',
            fechaFin: '15/04/2024',
            prioridad: 'Alta',
            grupo: 'Integración y Usuarios',
            tecnologia: 'Node.js/Express',
            observaciones: 'Sistema de webhooks para integración con sistemas externos de ART'
          },
          {
            proyecto: 'ART Usuarios',
            estado: 'Planificación',
            progreso: 15,
            responsable: 'Equipo Frontend-ART',
            fechaInicio: '01/03/2024',
            fechaFin: '30/04/2024',
            prioridad: 'Media',
            grupo: 'Integración y Usuarios',
            tecnologia: 'React/PostgreSQL',
            observaciones: 'Sistema de gestión de usuarios y perfiles para plataforma ART'
          }
        ]
      },
      {
        id: 'grupo-3',
        name: 'Funcionalidades Futuras',
        description: 'Proyectos en definición para expansión del sistema ART',
        color: 'gray',
        projects: [
          {
            proyecto: 'Aun no definidos',
            estado: 'En Definición',
            progreso: 0,
            responsable: 'Por Asignar',
            fechaInicio: '',
            fechaFin: '',
            prioridad: 'Por Definir',
            grupo: 'Funcionalidades Futuras',
            tecnologia: 'Por Definir',
            observaciones: 'Proyectos adicionales del sistema ART en fase de definición y análisis de requerimientos'
          }
        ]
      }
    ]
  },
  {
    id: 'proyecto-cis',
    name: 'Proyecto CIS',
    description: 'Centro de Información y Servicios - Plataforma integral de atención ciudadana',
    color: 'orange',
    icon: 'Calculator',
    totalSubProjects: 7,
    completedSubProjects: 2,
    avgProgress: 51,
    groups: [
      {
        id: 'atencion-ciudadana',
        name: 'Atención Ciudadana',
        description: 'Herramientas para atención y servicio al ciudadano',
        color: 'orange',
        projects: [
          {
            proyecto: 'Chatbot CIS',
            estado: 'Completado',
            progreso: 100,
            responsable: 'Equipo IA-CIS',
            fechaInicio: '01/12/2023',
            fechaFin: '31/01/2024',
            prioridad: 'Alta',
            grupo: 'Atención Ciudadana',
            tecnologia: 'Python/OpenAI',
            observaciones: 'Chatbot inteligente para atención 24/7 a consultas ciudadanas'
          },
          {
            proyecto: 'Sistema de Turnos IA',
            estado: 'En Desarrollo',
            progreso: 75,
            responsable: 'Equipo Backend-CIS',
            fechaInicio: '15/02/2024',
            fechaFin: '30/04/2024',
            prioridad: 'Alta',
            grupo: 'Atención Ciudadana',
            tecnologia: 'Node.js/React',
            observaciones: 'Sistema inteligente de asignación y gestión de turnos'
          },
          {
            proyecto: 'Portal de Consultas',
            estado: 'Completado',
            progreso: 100,
            responsable: 'Equipo Frontend-CIS',
            fechaInicio: '01/01/2024',
            fechaFin: '15/02/2024',
            prioridad: 'Media',
            grupo: 'Atención Ciudadana',
            tecnologia: 'React/Next.js',
            observaciones: 'Portal web para consultas y trámites ciudadanos'
          }
        ]
      },
      {
        id: 'gestion-tramites',
        name: 'Gestión de Trámites',
        description: 'Automatización y seguimiento de trámites',
        color: 'blue',
        projects: [
          {
            proyecto: 'Automatizador de Trámites',
            estado: 'En Desarrollo',
            progreso: 60,
            responsable: 'Equipo Automatización',
            fechaInicio: '01/03/2024',
            fechaFin: '31/05/2024',
            prioridad: 'Alta',
            grupo: 'Gestión de Trámites',
            tecnologia: 'Python/RPA',
            observaciones: 'Automatización de trámites repetitivos usando RPA e IA'
          },
          {
            proyecto: 'Validador de Documentos CIS',
            estado: 'En Desarrollo',
            progreso: 40,
            responsable: 'Equipo Validación',
            fechaInicio: '15/03/2024',
            fechaFin: '30/06/2024',
            prioridad: 'Media',
            grupo: 'Gestión de Trámites',
            tecnologia: 'Python/OCR',
            observaciones: 'Validación automática de documentos presentados por ciudadanos'
          }
        ]
      },
      {
        id: 'analytics-cis',
        name: 'Analytics y Reportes',
        description: 'Análisis de datos y generación de reportes CIS',
        color: 'purple',
        projects: [
          {
            proyecto: 'Dashboard CIS',
            estado: 'En Desarrollo',
            progreso: 30,
            responsable: 'Equipo Analytics-CIS',
            fechaInicio: '01/04/2024',
            fechaFin: '31/07/2024',
            prioridad: 'Media',
            grupo: 'Analytics y Reportes',
            tecnologia: 'React/D3.js',
            observaciones: 'Dashboard con métricas de atención ciudadana y eficiencia'
          },
          {
            proyecto: 'Predictor de Demanda',
            estado: 'Planificación',
            progreso: 15,
            responsable: 'Equipo ML-CIS',
            fechaInicio: '15/05/2024',
            fechaFin: '30/08/2024',
            prioridad: 'Baja',
            grupo: 'Analytics y Reportes',
            tecnologia: 'Python/Prophet',
            observaciones: 'Predicción de demanda de servicios para optimización de recursos'
          }
        ]
      }
    ]
  },
  {
    id: 'proyecto-atencion-24-7',
    name: 'Proyecto Atencion 24/7',
    description: 'Plataforma de atención continua y soporte técnico automatizado las 24 horas',
    color: 'purple',
    icon: 'BarChart3',
    totalSubProjects: 5,
    completedSubProjects: 1,
    avgProgress: 38,
    groups: [
      {
        id: 'soporte-automatizado',
        name: 'Soporte Automatizado',
        description: 'Sistemas de soporte técnico automatizado',
        color: 'purple',
        projects: [
          {
            proyecto: 'Agente de Soporte IA',
            estado: 'En Desarrollo',
            progreso: 55,
            responsable: 'Equipo IA-Soporte',
            fechaInicio: '01/02/2024',
            fechaFin: '30/04/2024',
            prioridad: 'Alta',
            grupo: 'Soporte Automatizado',
            tecnologia: 'Python/OpenAI',
            observaciones: 'Agente de IA para resolución automática de incidencias técnicas'
          },
          {
            proyecto: 'Sistema de Tickets IA',
            estado: 'Completado',
            progreso: 100,
            responsable: 'Equipo Backend-Soporte',
            fechaInicio: '01/01/2024',
            fechaFin: '28/02/2024',
            prioridad: 'Alta',
            grupo: 'Soporte Automatizado',
            tecnologia: 'Node.js/MongoDB',
            observaciones: 'Sistema inteligente de gestión y priorización de tickets'
          }
        ]
      },
      {
        id: 'monitoreo',
        name: 'Monitoreo Continuo',
        description: 'Herramientas de monitoreo y alertas 24/7',
        color: 'red',
        projects: [
          {
            proyecto: 'Monitor de Sistemas',
            estado: 'En Desarrollo',
            progreso: 45,
            responsable: 'Equipo DevOps',
            fechaInicio: '15/02/2024',
            fechaFin: '15/05/2024',
            prioridad: 'Alta',
            grupo: 'Monitoreo Continuo',
            tecnologia: 'Prometheus/Grafana',
            observaciones: 'Monitoreo en tiempo real de todos los sistemas críticos'
          },
          {
            proyecto: 'Alertas Inteligentes',
            estado: 'Planificación',
            progreso: 20,
            responsable: 'Equipo Alertas',
            fechaInicio: '01/04/2024',
            fechaFin: '30/06/2024',
            prioridad: 'Media',
            grupo: 'Monitoreo Continuo',
            tecnologia: 'Python/ML',
            observaciones: 'Sistema de alertas predictivas basado en patrones de comportamiento'
          }
        ]
      },
      {
        id: 'escalamiento',
        name: 'Escalamiento Automático',
        description: 'Sistemas de escalamiento y distribución de carga',
        color: 'green',
        projects: [
          {
            proyecto: 'Auto-Escalador',
            estado: 'Planificación',
            progreso: 10,
            responsable: 'Equipo Infraestructura',
            fechaInicio: '01/05/2024',
            fechaFin: '31/07/2024',
            prioridad: 'Media',
            grupo: 'Escalamiento Automático',
            tecnologia: 'Kubernetes/Docker',
            observaciones: 'Sistema de escalamiento automático basado en demanda y carga'
          }
        ]
      }
    ]
  }
]

export function getMainProjectStats() {
  const totalProjects = mainProjectsData.length
  const totalSubProjects = mainProjectsData.reduce((acc, project) => acc + project.totalSubProjects, 0)
  const totalCompleted = mainProjectsData.reduce((acc, project) => acc + project.completedSubProjects, 0)
  const avgProgress = Math.round(mainProjectsData.reduce((acc, project) => acc + project.avgProgress, 0) / totalProjects)
  
  return {
    totalMainProjects: totalProjects,
    totalSubProjects,
    totalCompleted,
    avgProgress
  }
}
