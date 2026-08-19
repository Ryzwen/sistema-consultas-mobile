import axios from "axios";
import { Paciente } from "../types/paciente";

const API_URL = "http://localhost:8080";

export async function listarPacientes(): Promise<Paciente[]> {
  const response = await axios.get(`${API_URL}/pacientes`);
  return response.data;
}