import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://nzctebxobnjbvyygzpfq.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im56Y3RlYnhvYm5qYnZ5eWd6cGZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA4OTg1MjMsImV4cCI6MjAwNjQ3NDUyM30.MxbJfyA9BPnieOBHTVjvy05u2UYAVnlF1x13BDAoiO8";
createClient(supabaseUrl, supabaseAnonKey);
