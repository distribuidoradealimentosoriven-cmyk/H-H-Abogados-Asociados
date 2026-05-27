import { SpecialtyData, ScenarioData } from './types';

export const specialties: SpecialtyData[] = [
  {
    id: 'procesal',
    title: 'Derecho Procesal y Litigio',
    subtitle: 'Litigio Avanzado ante Tribunales Civiles y Mercantiles',
    description: 'Defensa técnica especializada y representación de alto impacto en todas las fases del proceso judicial. Formulamos recursos sofisticados, impugnaciones y acciones procesales eficientes.',
    cases: [
      'Demandas por incumplimiento contractual y daños',
      'Defensa judicial ante embargos y medidas cautelares',
      'Recursos de Casación Civil y amparos constitucionales',
      'Estrategias de resolución alternativa y acuerdos transaccionales homologados'
    ],
    documents: [
      'Contratos, facturas o acuerdos firmados',
      'Poder de representación judicial (si aplica)',
      'Notificaciones preliminares e intercambios de correspondencia',
      'Documentos de identidad de las partes involucradas'
    ],
    approach: 'Análisis minucioso del riesgo procesal previo a la demanda, minimizando costos y maximizando tasas de éxito.'
  },
  {
    id: 'mercantil',
    title: 'Derecho Mercantil',
    subtitle: 'Protección Corporativa y Cobro de Cartera',
    description: 'Asesoría jurídica para empresas en conflictos internos y cobro ejecutivo de deudas. Blindamos operaciones y recuperamos activos financieros de manera expedita.',
    cases: [
      'Juicios ejecutivos mercantiles para cobro de facturas y pagarés',
      'Conflictos societarios e impugnación de decisiones de asamblea',
      'Redacción y blindaje de contratos comerciales y actas constitutivas',
      'Negociación de reestructuración de pasivos comerciales'
    ],
    documents: [
      'Pagarés, letras de cambio, facturas de compras firmadas',
      'Registro mercantil y estatutos vigentes de la empresa',
      'Actas de asamblea en disputa',
      'Cuentas por cobrar documentadas'
    ],
    approach: 'Priorizamos la vía de cobro ejecutivo y las medidas de secuestro/embargo preventivo para garantizar la recuperación real de fondos.'
  },
  {
    id: 'civil',
    title: 'Derecho Civil y Patrimonial',
    subtitle: 'Garantía sobre Bienes, Propiedades y Obligaciones',
    description: 'Protección de su propiedad y patrimonio inmobiliario en Venezuela. Actuamos con celeridad ante ocupaciones ilegales, incumplimientos de arrendamiento y disputas posesorias.',
    cases: [
      'Acción reivindicatoria y juicios por invasión u ocupación ilegítima',
      'Desalojo de locales comerciales e inmuebles residenciales',
      'Redacción de contratos de compraventa y opción de compra con garantías',
      'Prescripción adquisitiva y regularización de títulos de propiedad'
    ],
    documents: [
      'Título de propiedad registrado (Copia certificada)',
      'Ficha catastral actualizada',
      'Contrato de arrendamiento o pactos de opción de compra',
      'Pruebas del estado posesorio'
    ],
    approach: 'Acciones sumarias e interdictales oportunas para salvaguardar la posesión inmediata del bien raíz.'
  },
  {
    id: 'familia',
    title: 'Familia y Sucesiones',
    subtitle: 'Trámites de Estado Civil y Herencias con Alcance Remoto',
    description: 'Gestión ágil de regulaciones que impactan su estatus familiar. Facilitamos permisos internacionales para menores y la adjudicación ordenada de bienes hereditarios.',
    cases: [
      'Autorizaciones judiciales de viaje para niños, niñas y adolescentes (LOPNNA)',
      'Declaraciones de Únicos y Universales Herederos',
      'Divorcios de mutuo acuerdo (185-A) y por desafecto',
      'Saneamiento y declaración del Impuesto sobre Sucesiones (SENIAT)'
    ],
    documents: [
      'Actas de Nacimiento debidamente legalizadas o apostilladas',
      'Acta de Defunción del causante (para sucesiones)',
      'Copia de las Cédulas de Identidad de herederos y causantes',
      'Lista de bienes con sus respectivos soportes de propiedad'
    ],
    approach: 'Agilización de trámites a la distancia mediante la representación legal directa, aliviando la carga burocrática para el cliente.'
  }
];

export const scenarios: ScenarioData[] = [
  {
    id: 'viaje',
    title: 'Autorizaciones de Viaje LOPNNA',
    description: 'Gestión ágil de permisos judiciales y notariales para que su hijo/a viaje fuera de Venezuela bajo los lineamientos de la LOPNNA, ideal cuando uno o ambos padres están en el extranjero.',
    requirements: [
      'Copia de Cédulas de Identidad de ambos padres',
      'Partida de Nacimiento original del menor',
      'Datos exactos del vuelo, fechas y acompañante',
      'Poder consular o notarial del padre ausente (redactado por nosotros)'
    ],
    steps: [
      'Redactamos el borrador del Poder Especial ajustado a la ley venezolana.',
      'Usted firma ante el Consulado o Notario en su país de residencia.',
      'Recibimos el poder en Puerto Ordaz y lo presentamos ante el Tribunal de Protección o Notaría.',
      'Entregamos el permiso visado y legalizado listo para el counter del aeropuerto.'
    ],
    timeline: '3 a 7 días hábiles a partir de la recepción física de los documentos.'
  },
  {
    id: 'venta_inmueble',
    title: 'Venta de Inmuebles a Distancia',
    description: 'Transfiera, venda o arriende de forma legal su propiedad en el Estado Bolívar o Venezuela mediante un apoderado de su total confianza, bajo estricto control de seguridad jurídica.',
    requirements: [
      'Título de Propiedad registrado',
      'Cédula catastral',
      'Poder Especial registrado con facultades expresas de venta',
      'Solvencias de servicios y aseo urbano'
    ],
    steps: [
      'Diseñamos el texto del Poder de Venta garantizando que ninguna cuenta se movilice sin su consentimiento.',
      'Usted formaliza el poder en su consulado local o lo apostilla en el extranjero.',
      'Registramos el Poder Especial en la oficina de Registro Público de Guayana o el destino correspondiente.',
      'Asistimos a la firma de la Compraventa garantizando la recepción de fondos seguros.'
    ],
    timeline: '15 a 30 días hábiles (sujeto a plazos del Registro Público venezolano).'
  },
  {
    id: 'divorcio',
    title: 'Divorcio en Venezuela desde el Exterior',
    description: 'Disuelva el vínculo matrimonial en territorio venezolano mediante representación por apoderado judicial, sin requerir su traslado físico al país.',
    requirements: [
      'Acta de Matrimonio original e inscrita debidamente',
      'Acta de Nacimiento de hijos comunes (si los hay)',
      'Poder Judicial específico para comparecer ante los tribunales',
      'Copia de Cédula de Identidad de ambos cónyuges'
    ],
    steps: [
      'Análisis de la vía procesal idónea (Mutuo Acuerdo 185-A o desafecto constitucional).',
      'Envío del Poder Judicial específico con cláusula de allanamiento y divorcio.',
      'Admisión de la solicitud y citaciones oficiales en Puerto Ordaz o la zona del último domicilio conyugal.',
      'Emisión de Sentencia Definitiva y posterior inscripción del divorcio en el Registro Civil.'
    ],
    timeline: '30 a 90 días dependiendo de la cooperación de las partes y el tribunal.'
  },
  {
    id: 'sucesiones',
    title: 'Declaraciones Hereditarias (Sucesión)',
    description: 'Cumplimiento rápido de los deberes fiscales sucesorales ante el SENIAT y habilitación judicial para disponer libremente de cuentas bancarias e inmuebles heredados.',
    requirements: [
      'Acta de Defunción original',
      'Actas de Nacimiento que demuestren el nexo filial de los herederos',
      'Acta de Matrimonio o Constancia de Concubinato del fallecido',
      'Documentos de propiedad de bienes (casas, vehículos, acciones o cuentas bancarias)'
    ],
    steps: [
      'Inscripción del R.I.F. Sucesoral ante la administración tributaria venezolana.',
      'Elaboración del inventario detallado de la masa hereditaria y cálculo de exenciones fiscales.',
      'Obtención de la Solvencia o Certificado Sucesoral expedido por el SENIAT.',
      'Juicio de Únicos y Universales Herederos ante el Tribunal de Municipio para transferir la titularidad de cuentas y valores.'
    ],
    timeline: '20 a 45 días hábiles conforme al volumen de activos y solvencias.'
  }
];

export const trustCounters = [
  { value: '+12 Años', label: 'Trayectoria Procesal' },
  { value: '100%', label: 'Consultas Virtuales Habilitadas' },
  { value: '450+', label: 'Casos Resueltos Exitosamente' },
  { value: 'Puerto Ordaz', label: 'Domicilio Principal' }
];

export const coreValues = [
  {
    title: 'Rigor Técnico y Analítico',
    description: 'Evaluamos cada caso bajo precedentes vinculantes de la Sala de Casación Civil del Tribunal Supremo de Justicia (TSJ).'
  },
  {
    title: 'Transparencia y Trazabilidad',
    description: 'Usted no necesita viajar. Le enviamos escaneos y reportes constantes de cada hito alcanzado ante el Juzgado o Notaría.'
  },
  {
    title: 'Canal de Resguardo Seguro',
    description: 'Seguridad absoluta de datos, garantizando confidencialidad extrema en cada transacción civil o mercantil de su patrimonio.'
  }
];
