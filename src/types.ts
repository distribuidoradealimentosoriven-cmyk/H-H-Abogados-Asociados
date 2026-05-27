export type SpecialtyKey = 'procesal' | 'mercantil' | 'civil' | 'familia';

export interface SpecialtyData {
  id: SpecialtyKey;
  title: string;
  subtitle: string;
  description: string;
  cases: string[];
  documents: string[];
  approach: string;
}

export type ScenarioKey = 'viaje' | 'venta_inmueble' | 'divorcio' | 'sucesiones';

export interface ScenarioData {
  id: ScenarioKey;
  title: string;
  description: string;
  requirements: string[];
  steps: string[];
  timeline: string;
}
