import axios from "axios";
import { Medico } from "../interfaces/medico";

const API_URL = "http://localhost:8080";

export async function listarMedicos(): Promise<Medico[]> {
  const response = await axios.get(`${API_URL}/medicos`);
  return response.data;
}